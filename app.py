from flask import Flask

app = Flask(__name__)

@app.route("/")
def accueil():
    return "Bonjour ! Bienvenue dans mon application Python 🚀"

@app.route("/about")
def about():
    return "Ceci est la page À propos."

if __name__ == "__main__":
    app.run(debug=True)