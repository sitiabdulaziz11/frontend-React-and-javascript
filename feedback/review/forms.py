from django import forms

from .models import Review

# class ReviewForm(forms.Form):
#     """ To use django forms
#     """
#     user_name = forms.CharField(label="Your Name", max_length=100, error_messages={
#     "required": "Your name must not be empty",
#     "max_length": "Please enter a shorter name!"
#         })   # By default CharField() is requerd.
#     review_text = forms.CharField(label="Your Feedback", widget=forms.Textarea, max_length=200)
#     rating = forms.IntegerField(label="Your Rating", min_value=1, max_value=5)

class ReviewForms(forms.ModelForm):
    """Forms class
    """
    class Meta:
        model = Review
        # fields = ['user_name', 'review_text', 'rating']   # instade of listing each field we can do as followes
        fields = "__all__"
        # exclude = ['owner_comment'] # to render all except this instade of the above '__all__'
        labels = {
            "user_name": "Your Name",
            "review_text": "Your Feedback",
            "rating": "Your Rating"
        }
        error_messages = {
            "user_name": {
                "required": "Your name must not be empty!",
                "max_length": "Please enter a shorter name!"
            }
        }
