from tkinter import Tk
from tkinter.filedialog import askopenfilename

import cv2 as cv
import face_recognition as fr


load_image = askopenfilename()

target_image = fr.load_image_file(load_image)
target_encoding = fr.face_encodings(target_image)

face_location = fr.face_locations(target_image)


def create_frame(location, label):
    top, right, bottom, left = location

    cv.rectangle(target_image, (left, top), (right, bottom), (255, 0, 0), 2)
    cv.rectangle(target_image, (left, bottom + 20),
                 (right, bottom), (255, 0, 0), cv.FILLED)
    cv.putText(target_image, label, (left + 3, bottom + 14),
               cv.FONT_HERSHEY_DUPLEX, 0.4, (255, 255, 255), 1)


if face_location:

    for location in face_location:
        label = "Selected File"
        create_frame(location, label)


def render_image():
    rgb_img = cv.cvtColor(target_image, cv.COLOR_RGB2BGRA)
    cv.imshow('Face Recognition', rgb_img)
    cv.waitKey(0)


render_image()
