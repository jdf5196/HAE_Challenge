from rest_framework import routers
from candidates.views import CandidateViewSet

router = routers.SimpleRouter()
router.register(r'candidates', CandidateViewSet)

urlpatterns = router.urls
