
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView
from .serializers import JournalSerializer
from .models import journal
from rest_framework.pagination import CursorPagination


# Create your views here.



class JournalCursorPagination(CursorPagination):
    page_size = 10  # Number of entries to return per request
    ordering = '-DateTime'


class JournalListAPIView(ListCreateAPIView):
    serializer_class = JournalSerializer
    # permission_classes=[IsAuthenticated]
    # authentication_classes = [JWTAuthentication]
    pagination_class = JournalCursorPagination

    def get_queryset(self):
        owner = self.request.user
        return journal.objects.filter(Owner = 2).order_by('-DateTime')
    
    # lookup_field = 'Owner'
    # def get(self, request):
    #     owner = request.user
    #     journal_lists = journal.objects.filter(Owner = owner)

    def perform_create(self, serializer):
        serializer.save(Owner=self.request.user)
    
class EditDeleteJournal(RetrieveUpdateDestroyAPIView):
    queryset = journal.objects.all()
    serializer_class = JournalSerializer
    # permission_classes=[IsAuthenticated]
    # authentication_classes = [JWTAuthentication]
    def get_queryset(self):
        owner = self.request.user
        return journal.objects.filter(Owner = 2)