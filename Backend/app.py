from flask import Flask,jsonify,request
from flask_cors import CORS, cross_origin
from pymongo.mongo_client import MongoClient
uri = "mongodb+srv://mongo:mongo@cluster0.jhgevbw.mongodb.net/"
client = MongoClient(uri)
# db = client["shop"]
# collection = db["products"]

db = client["food_order"]
collection = db["meat"]

p_in_DB = collection.find()
products=[]
for p in p_in_DB:
    products.append(p)
# print(products)
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/products",methods=["GET"])
def get_all_products():
    return jsonify(products),200

@app.route("/products",methods=["POST"])
@cross_origin()
def add_product():
    data = request.get_json(products)
    count = 0
    oak = 0
    if products:
        print("it empty!!!!")
    for _ in products :
        count = _
        oak = 1   
    ttt = 0
    if oak != 0 :
        ttt = count["_id"]+1
    new_product = {
        "_id":ttt,
        "name":data["name"],
        "price":data["price"],
        "image":data["image"],
    }
    products.append(new_product)
    collection.insert_one({
        "_id":ttt,
        "name":data["name"],
        "price":data["price"],
        "image":data["image"],
    })
    return jsonify(products),200
    
@app.route("/products/<int:id>",methods=["DELETE"])
def detele_product(id):
    for o in products:
        if(o["_id"] == id):

            print(o)
            
            products.remove(o)
            collection.delete_one({"_id":id})
            
            return jsonify(products),200
    return jsonify(products),404



@app.route("/products/<int:id>",methods=["PUT"])
def update_product(id):
    data = request.get_json(products)
    up_p = {
        "_id":{id},
        "name":data["name"],
        "price":data["price"],
        "price":data["price"],
    }
    for o in products:
        if(o["_id"] == id):
            o.update(data)
            collection.update_many(
                {"_id":o["_id"]},
                {"$set":{   "name" : data["name"],
                            "price" : data["price"],
                            "price":data["price"],
                        }
                }
            )
            return jsonify(products),200
    return jsonify("Not found!!"),200

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000,debug=True)
