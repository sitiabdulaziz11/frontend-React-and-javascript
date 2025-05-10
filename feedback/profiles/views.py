from django.shortcuts import render
from django.views import View
from django.http import HttpResponseRedirect
from django.views.generic.edit import CreateView
from django.views.generic import ListView

from .forms import ProfileForm
from .models import UserProfile

# Create your views here.


# def stor_file(file):
#     """ Store the file in our system.
#     """
#     with open("temp/image.png", "wb+") as dest:
#         for chunk in file.chunks():
#             dest.write(chunk)


class CreateProfileView(CreateView):
    """To create file by using django built in futear
    """
    template_name = "profiles/create_profile.html"
    model = UserProfile
    fields = "__all__"
    success_url = "/profiles"  # to redirect url

# All below code replaced by above

# class CreateProfileView(View):
#     """To create file
#     """
#     def get(self, request):
#         form = ProfileForm()
#         return render(request, "profiles/create_profile.html", {
#             "form": form
#         })

#     def post(self, request):
#         submitted_form = ProfileForm(request.POST, request.FILES)
#         # request.POST  # is only for non-file data
#         if submitted_form.is_valid():
#             # stor_file(request.FILES['image']) # is  for any submitted file data
#             profile = UserProfile(file_image=request.FILES["user_image"])
#             profile.save()
#             return HttpResponseRedirect("/profiles")
        
#         return render(request, "profiles/create_profile.html", {
#             "form": submitted_form
#         })

class ProfilesView(ListView):
    """To show all files
    """
    model = UserProfile  # to get all data from db or to point user profile model.
    template_name = "profiles/user_profile.html"
    context_object_name = "profiles"  # to use in template as {{ profiles }}
