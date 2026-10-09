import cv2, numpy as np, sys, json
# per-image: list of (x1,y1,x2,y2,kind) kind: temple|lens|text (text = remove only)
CFG = {
 'original': [(1460,915,1575,985,'temple',-12),(1150,915,1320,975,'lensadd',-20),(320,712,410,758,'text',0)],
 'v_eb88':   [(1650,735,1810,810,'lens',-15)],
 'v_5fc8':   [(1430,880,1610,955,'temple',-6),(1170,785,1370,825,'text',0)],
 'v_right':  [(420,845,570,905,'temple',-5),(1690,780,1810,840,'lens',-15)],
 'v_dfb8':   [(390,640,530,700,'text',0)],
 'view_a':   [(1460,845,1580,905,'temple',-8),(1140,825,1310,895,'lens',-22)],
 'view_b':   [(1440,945,1610,1010,'temple',-12),(1150,995,1340,1070,'lens',-22)],
}
icon = cv2.imread('logos/icon_zeus_1024.png', cv2.IMREAD_UNCHANGED)
word = cv2.imread('logos/word_dark.png', cv2.IMREAD_UNCHANGED)
def overlay(img, g, cx, cy, w, alpha=1.0, ang=0):
    h = int(g.shape[0]*w/g.shape[1]); g = cv2.resize(g,(w,h),interpolation=cv2.INTER_AREA)
    if ang:
        pad=max(w,h); g=cv2.copyMakeBorder(g,pad,pad,pad,pad,cv2.BORDER_CONSTANT,value=(0,0,0,0))
        M=cv2.getRotationMatrix2D((g.shape[1]/2,g.shape[0]/2),ang,1.0); g=cv2.warpAffine(g,M,(g.shape[1],g.shape[0]),flags=cv2.INTER_AREA)
        ys,xs=np.where(g[:,:,3]>0); g=g[ys.min():ys.max()+1, xs.min():xs.max()+1]; h,w=g.shape[:2]
    x1,y1 = cx-w//2, cy-h//2
    roi = img[y1:y1+h, x1:x1+w].astype(float); a = (g[:,:,3:4]/255.0)*alpha
    img[y1:y1+h, x1:x1+w] = (roi*(1-a) + g[:,:,:3].astype(float)*a).astype(np.uint8)
def silver_mask(img, box):
    x1,y1,x2,y2 = box; roi = img[y1:y2, x1:x2]
    hsv = cv2.cvtColor(roi, cv2.COLOR_BGR2HSV); H,S,V = cv2.split(hsv)
    gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
    med = cv2.medianBlur(gray, 31)
    m = ((gray.astype(int) - med.astype(int)) > 28) & (S < 110)
    m = m.astype(np.uint8)*255
    m = cv2.dilate(m, np.ones((7,7),np.uint8))
    full = np.zeros(img.shape[:2],np.uint8); full[y1:y2,x1:x2] = m
    return full, int(m.sum()/255)
for name in sys.argv[1:]:
    img = cv2.imread(f'../img/{name}.png'); report=[]
    for (x1,y1,x2,y2,kind,ang) in CFG[name]:
        cx,cy = (x1+x2)//2,(y1+y2)//2
        if kind!='lensadd':
            m, n = silver_mask(img,(x1,y1,x2,y2))
            img = cv2.inpaint(img, m, 6, cv2.INPAINT_TELEA); report.append((kind,n))
        if kind=='temple': overlay(img, icon, cx, cy, int((y2-y1)*0.62), 0.92, ang)
        if kind in('lens','lensadd'): overlay(img, word, cx, cy, int((x2-x1)*0.9), 0.72, ang)
    cv2.imwrite(f'out_{name}.png', img)
    # review crops
    crops=[]
    for (x1,y1,x2,y2,k,_) in CFG[name]:
        pad=60; c=img[max(0,y1-pad):y2+pad, max(0,x1-pad):x2+pad]; c=cv2.resize(c,None,fx=2,fy=2); crops.append(c)
    hmax=max(c.shape[0] for c in crops); crops=[cv2.copyMakeBorder(c,0,hmax-c.shape[0],0,10,cv2.BORDER_CONSTANT,value=(255,255,255)) for c in crops]
    cv2.imwrite(f'review_{name}.jpg', np.hstack(crops), [cv2.IMWRITE_JPEG_QUALITY,85])
    print(name, report)
