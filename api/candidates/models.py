from __future__ import unicode_literals

from django.db import models
from rest_framework.exceptions import ValidationError


class Candidate(models.Model):
    PENDING = 'pending'
    ACCEPTED = 'accepted'
    REJECTED = 'rejected'

    STATUS_CHOICES = (
        (PENDING, 'Pending'),
        (ACCEPTED, 'Accepted'),
        (REJECTED, 'REJECTED'),
    )

    name = models.CharField(max_length=256)
    years_exp = models.IntegerField()
    status = models.CharField(choices=STATUS_CHOICES, default=PENDING, max_length=256)
    date_applied = models.DateTimeField()
    reviewed = models.BooleanField(default=False)
    description = models.TextField()

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def clean(self):
        if self.reviewed and self.status == self.PENDING:
            raise ValidationError({'status': 'Reviewed candidates cannot be changed back to pending!'})

    def save(self, *args, **kwargs):
        self.clean()
        if self.status in (self.ACCEPTED, self.REJECTED):
            self.reviewed = True
        else:
            self.reviewed = False
        super(Candidate, self).save(*args, **kwargs)
