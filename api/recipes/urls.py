from django.urls import path
from .views import RecipeListView, RecipeDetailView

urlpatterns = [
    path('', RecipeListView.as_view(), name='recipe-view'),
    path('<int:pk>', RecipeDetailView.as_view(), name='recipe-detail'),
]
