from django.http import HttpResponseRedirect
from django.shortcuts import render


# Create your views here.

def review(request):
    """
    Function to handle review requests.
    """
    if request.method == 'POST':
        enterd_username = request.POST['username']  # request here is to reade some dtata from the request, POST to accecce the data it self.
        
        if enterd_username == "" and len(enterd_username) >= 100:
            return render(request, 'reviews/review.html', {
                    "has_error": True
                })
        
        print(enterd_username)
        # return render(request, "reviews/thank_you.html")
        return HttpResponseRedirect('/thank-you')
    
    return render(request, 'reviews/review.html', {
        "has_error": False
    })


def thank_you(request):
    """To redirect
    """
    return render(request, "reviews/thank_you.html")
