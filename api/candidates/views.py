from rest_framework import viewsets, serializers
from candidates.models import Candidate


class CandidateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Candidate
        fields = (
            'id',
            'name',
            'years_exp',
            'status',
            'date_applied',
            'reviewed',
            'description',
        )
        read_only_fields = (
            'reviewed',
        )


class CandidateViewSet(viewsets.ModelViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer
