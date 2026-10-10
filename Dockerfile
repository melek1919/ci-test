FROM python:3.12-slim
WORKDIR   /build
COPY app.py .
CMD ["python","app.py"]