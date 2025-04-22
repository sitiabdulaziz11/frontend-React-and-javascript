from django.http import HttpResponseRedirect
from django.shortcuts import render

from .forms import ReviewForms
from .models import Review


# Create your views here.

def review(request):
    """
    Function to handle review requests.
    """
    if request.method == 'POST':
        # enterd_username = request.POST['username']  # request here is to reade some dtata from the request, POST to accecce the data it self.
        
        # if enterd_username == "" and len(enterd_username) >= 100:
        #     return render(request, 'reviews/review.html', {
        #             "has_error": True
        #         })
        form = ReviewForms(request.POST)
        
        if form.is_valid():
        #    print(form.cleaned_data)   
           review = Review(
               user_name=form.cleaned_data['user_name'],
               review_text=form.cleaned_data['review_text'],
               rating=form.cleaned_data['rating'])
           review.save()
           return HttpResponseRedirect('/thank-you')
           
        # print(enterd_username)
        # return render(request, "reviews/thank_you.html")
        # return HttpResponseRedirect('/thank-you')
    
    else:
        form = ReviewForms()
    
    return render(request, 'reviews/review.html', {
        # "has_error": False
        "form1": form
    })


def thank_you(request):
    """To redirect
    """
    return render(request, "reviews/thank_you.html")
