from flask import Flask,jsonify,request
from flask_cors import CORS, cross_origin
from pymongo.mongo_client import MongoClient
uri = "mongodb+srv://mongo:mongo@cluster0.jhgevbw.mongodb.net/"
client = MongoClient(uri)
# db = client["shop"]
# collection = db["products"]

db = client["food_order"]
collection = db["meat"]

order = []
check = []
total = 0

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
        "image":data["image"],
    }
    for o in products:
        if(o["_id"] == id):
            o.update(data)
            collection.update_many(
                {"_id":o["_id"]},
                {"$set":{   "name" : data["name"],
                            "price" : data["price"],
                            "image":data["image"],
                        }
                }
            )
            return jsonify(products),200
    return jsonify("Not found!!"),200

@app.route("/order", methods=["GET"])
def get_order():
    return jsonify(order),200

@app.route("/order/<int:id>", methods=["POST"])
def post_in_order(id):
    for o in products:
        if(o["_id"] == id):
            order.append(o)
            return jsonify(order),200
    return jsonify(order),404

@app.route("/order/<int:id>", methods=["DELETE"])
def delete_in_order(id):
    tmp = order
    for o in order:
        if(o["_id"] == id):
            tmp.remove(o)
            return jsonify(tmp),200
    return jsonify(order),404

@app.route("/order", methods=["DELETE"])
def delete_all_order():
    for i in order :
        check.append(i)
    order.clear()
    return jsonify(order),200

@app.route("/check", methods=["GET"])
def get_check():
    return jsonify(check),200

@app.route("/check", methods=["DELETE"])
def delete_check():
    check.clear()
    return jsonify(check),200

@app.route("/total/order", methods=["GET"])
def get_total_order():
    u = 0
    for i in order :
        price = int(i["price"])
        u  = u + price
    return jsonify(u),200

@app.route("/total/check", methods=["GET"])
def get_total_check():
    u = 0
    for i in check :
        price = int(i["price"])
        u  = u + price
    return jsonify(u),200

if __name__ == "__main__":
    app.run(host="",port=5000,debug=True)
