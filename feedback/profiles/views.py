from django.shortcuts import render
from django.views import View
from django.http import HttpResponseRedirect

from .forms import ProfileForm
from .models import UserProfile

# Create your views here.


# def stor_file(file):
#     """ Store the file in our system.
#     """
#     with open("temp/image.png", "wb+") as dest:
#         for chunk in file.chunks():
#             dest.write(chunk)

class CreateProfileView(View):
    """To create file
    """
    def get(self, request):
        form = ProfileForm()
        return render(request, "profiles/create_profile.html", {
            "form": form
        })

    def post(self, request):
        submitted_form = ProfileForm(request.POST, request.FILES)
        # request.POST  # is only for non-file data
        if submitted_form.is_valid():
            # stor_file(request.FILES['image']) # is  for any submitted file data
            profile = UserProfile(file_image=request.FILES["user_image"])
            profile.save()
            return HttpResponseRedirect("/profiles")
        
        return render(request, "profiles/create_profile.html", {
            "form": submitted_form
        })
