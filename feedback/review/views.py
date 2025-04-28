from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views import View
from django.views.generic.base import TemplateView

from .forms import ReviewForms
# from .models import Review


# Create your views here.


class ReviewView(View):
    """
    Class to handle review requests.
    """
    def get(self, request):
        """function to handle get request
        """
        form = ReviewForms()
        return render(request, 'reviews/review.html', {
            "form1": form
        })
        
    def post(self, request):
        """
        function to handle post request
        """
        form = ReviewForms(request.POST)
        
        if form.is_valid():
            form.save()
            return HttpResponseRedirect("/thank-you")
        
        return render(request, "reviews/review.html", {
            "form1": form
        })

# def review(request):
#     """
#     Function to handle review requests.
#     """
#     if request.method == 'POST':
#         # enterd_username = request.POST['username']  # request here is to reade some dtata from the request, POST to accecce the data it self.
        
#         # if enterd_username == "" and len(enterd_username) >= 100:
#         #     return render(request, 'reviews/review.html', {
#         #             "has_error": True
#         #         })
#         form = ReviewForms(request.POST)
        
#         # existing_data = Review.objects.get(pk=1)  # this is to retrive data from database
#         # form = ReviewForms(request.POST, instance=existing_data) # this two line to update data if we need
        
#         if form.is_valid():
#         #    print(form.cleaned_data)   
#         #    review = Review(
#         #        user_name=form.cleaned_data['user_name'],
#         #        review_text=form.cleaned_data['review_text'],
#         #        rating=form.cleaned_data['rating'])
#         #    review.save()
#            form.save()
#            return HttpResponseRedirect('/thank-you')
           
#         # print(enterd_username)
#         # return render(request, "reviews/thank_you.html")
#         # return HttpResponseRedirect('/thank-you')
    
#     else:      # this is for get method
#         form = ReviewForms()
    
#     return render(request, 'reviews/review.html', {
#         # "has_error": False
#         "form1": form
#     })


# def thank_you(request):
#     """To redirect
#     """
#     return render(request, "reviews/thank_you.html")

# class ThankYouViews(View):
#     """Thankyou class
#     """
#     def get(self, request):
#         """ get method
#         """
#         return render(request, "reviews/thank_you.html")

class ThankYouViews(TemplateView):
    template_name = "reviews/thank_you.html"
    
    def get_context_data(self, **kwargs):
        # return super().get_context_data(**kwargs)
        context = super().get_context_data(**kwargs)
        context["message"] = "This works!"
        return context

class ReviewListView(TemplateView):
    """ Review list view for templates
    """
    template_name = "reviews/review_list.html"
    
    
