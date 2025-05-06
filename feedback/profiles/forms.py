from django import forms
class ProfileForm(forms.Form):
    """To upload file
    """
    # user_image = forms.FileField(allo)  # to allow empty file
    # user_image = forms.FileField()
    user_image = forms.ImageField()
