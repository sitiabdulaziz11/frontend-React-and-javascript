from django.http import HttpResponseRedirect
from django.shortcuts import render

from .forms import ReviewForm


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
        form = ReviewForm(request.POST)
        
        if form.is_valid():
           print(form.cleaned_data)
           return HttpResponseRedirect('/thank-you')
           
        # print(enterd_username)
        # return render(request, "reviews/thank_you.html")
        # return HttpResponseRedirect('/thank-you')
    
    else:
        form = ReviewForm()
    
    return render(request, 'reviews/review.html', {
        # "has_error": False
        "form1": form
    })


def thank_you(request):
    """To redirect
    """
    return render(request, "reviews/thank_you.html")
