from django import forms

class ReviewForm(forms.Form):
    """ To use django forms
    """
    user_name = forms.CharField()   # By default this is requerd field.
    