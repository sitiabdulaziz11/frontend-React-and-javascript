from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views import View
from django.views.generic.base import TemplateView
from django.views.generic import ListView, DetailView
# from django.views.generic.edit import FormView
from django.views.generic.edit import CreateView  # delete, update

from .forms import ReviewForms
from .models import Review


# Create your views here.


# class ReviewView(View):
# class ReviewView(FormView):
class ReviewView(CreateView):
    """
    Class to handle review requests.
    """
    # def get(self, request):
    #     """function to handle get request
    #     """
    #     form = ReviewForms()
    #     return render(request, 'reviews/review.html', {
    #         "form1": form
    #     })
        
    # def post(self, request):
    #     """
    #     function to handle post request
    #     """
    #     form = ReviewForms(request.POST)
        
    #     if form.is_valid():
    #         form.save()
    #         return HttpResponseRedirect("/thank-you")
        
    #     return render(request, "reviews/review.html", {
    #         "form1": form
    #     })
    
    # to avoid manual get and post method writing
    
    # form_class = ReviewForms
    model = Review
    form_class = ReviewForms
    # fields = "__all__"  # this is to render all fields
    template_name = "reviews/review.html"
    success_url = "/thank-you"
    
    
    # def form_valid(self, form):
    #     """To excute when a valid form is submitted.
    #     """
    #     form.save()
    #     return super().form_valid(form)
        

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
    
    def get_context_data(self, **kwargs):   # To get data only
        # return super().get_context_data(**kwargs)
        context = super().get_context_data(**kwargs)
        context["message"] = "This works!"
        return context

# class ReviewsListView(TemplateView):
class ReviewsListView(ListView):
    
    """ Review list view for templates
    """
    template_name = "reviews/review_list.html"
    
    # def get_context_data(self, **kwargs):
    #     context = super().get_context_data(**kwargs)
    #     reviews = Review.objects.all()
    #     context["reviews"] = reviews
    #     return context
    
    model = Review   # django featch all reviews by default. 
    context_object_name = "reviews"
    
    # def get_queryset(self):
    #     base_query = super().get_queryset()
    #     data = base_query.filter(rating__gt=4)
    #     return data


# class ReviewsDetailView(TemplateView):
class ReviewsDetailView(DetailView):
    """Review details, Authomaticaly fetches review
    """
    template_name = "reviews/review_detail.html"
    model = Review
    
    def get_context_data(self, **kwargs):
        """Defines context data for the template.
        """
        context = super().get_context_data(**kwargs)
        loaded_review = self.object
        request = self.request
        # favorite_id = request.session["favorite_review"]
        favorite_id = request.session.get("favorite_review")
        context["is_favorite"] = favorite_id == str(loaded_review.id)
        return context
    
    
    # def get_context_data(self, **kwargs):
    #     context = super().get_context_data(**kwargs)
    #     review_id = kwargs["id"]
    #     # reviews = Review.objects.all()
    #     selected_review = Review.objects.get(pk=review_id)
    #     # context["reviews"] = reviews
    #     # context["reviews"] = selected_review
    #     context["review"] = selected_review
    #     return context
    
    
class AddFavoriteView(View):
    """To add favorite feature
    """
    def post(self, request):
        """Post method
        """
        review_id = request.POST["review_id"]
        # fav_review = Review.objects.get(pk=review_id)
        request.session["favorite_review"] = review_id
        return HttpResponseRedirect("/reviews/" + review_id)
