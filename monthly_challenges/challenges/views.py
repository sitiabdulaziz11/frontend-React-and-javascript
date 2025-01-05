from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect
from django.urls import reverse

# Create your views here.

"""
def january(request):
    return HttpResponse("Eat no meat for the entire month!")

def february(request):
    return HttpResponse("walk for at least 20 min every day!")

def march(request):
    return HttpResponse("Learn Django for at least 20 minutes every day!")
"""
monthly_challenges = {
    "january": "Eat no meat for the entire month!",
    "february": "walk for at least 20 min every day!",
    "march": "Learn Django for at least 20 minutes every day!",
    "april": "get",
    "may": "happey",
    "june": "now",
    "july": "hi",
    "august": "give",
    "september": "learn",
    "october": "eat",
    "november": "ni"
}

def monthly_challenge_by_number(request, month):
    months = list(monthly_challenges.keys())
    
    if month > len(months):
        return HttpResponseNotFound("invalid month")
    
    redirect_month = months[month - 1]
    redirect_path = reverse("month-challenge", args=[redirect_month])
    return HttpResponseRedirect(redirect_path)
    # return HttpResponseRedirect("/challenges/" + redirect_month)
    # return HttpResponse(month)
    
def monthly_challenge(request, month):
    try:
        challenge_text = monthly_challenges[month]
    except:
        return HttpResponseNotFound("This month is not supported!")
    return HttpResponse(challenge_text)
           
    """if month == "january":
        challenge_text = "Eat no meat for the entire month!"
    elif month == "february":
        challenge_text = "walk for at least 20 min every day!"
    else:
        return HttpResponseNotFound("This month is not supported!")
        
    return HttpResponse(challenge_text)"""