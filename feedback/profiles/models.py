from django.db import models

# Create your models here.

class UserProfile(models.Model):
    """To stor file storage
    """
    # file_image = models.FileField(upload_to="images")   # file is not stord on db, but it's path is stord, FileField() is used to stor files like pdf..
    file_image = models.ImageField(upload_to="images")  # to stor only image
