import numpy as np
import cv2
import json
import sys

def draw(id, x, y):
    json_path = './public/presets/{}.json'.format(id)
    print(json_path)
    with open(json_path, 'r') as infile:
        data = json.load(infile)
    sample_draw_in = []
    sample_draw = []
    for poly in data['scence']:
        poly = np.array(poly)
        if ((x<poly[:, 0])*(poly[:, 0]<x+1000)*(y<poly[:, 1])*(poly[:, 1]<y+1000)).all():
            sample_draw_in.append(poly)
        else:
            sample_draw.append(poly)

    img = np.ones((2000,2000,3),np.uint8)*255

    for _, pts in enumerate(sample_draw):
        pts = pts.reshape((-1,1,2)).astype(int)
        cv2.fillPoly(img, [pts], color=(238, 159, 153))
        cv2.polylines(img,[pts],True,(0,0,0),1)
    for _, pts in enumerate(sample_draw_in):
        pts = pts.reshape((-1,1,2)).astype(int)
        cv2.fillPoly(img, [pts], color=(255, 255, 255))
        # cv2.polylines(img,[pts],True,(0,0,0),1)
    
        
    return img


if __name__ == '__main__':
    
    img = draw(sys.argv[1], int(float(sys.argv[2])), int(float(sys.argv[3])))

    cv2.imwrite('./public/cut.jpg',img)

    sys.stdout.flush()