python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
uvicorn main:app --port 8002
