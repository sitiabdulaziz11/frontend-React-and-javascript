from django import forms

class ReviewForm(forms.Form):
    """ To use django forms
    """
    user_name = forms.CharField(label="Your Name", max_length=100, error_messages={
    "required": "Your name must not be empty",
    "max_length": "Please enter a shorter name!"
        })   # By default CharField() is requerd.
    