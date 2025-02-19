from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def starting_page(request):
    """Renders the home page of the blog.
    """
    return render(request, "blog/index.html")  # blog/index.html is b/c template part is looked by django by default. so we don't say templates/blog/index.html

def posts(request):
    """For one post
    """
    pass

def posts_detail(request):
    """For one post detail.
    """
    pass
