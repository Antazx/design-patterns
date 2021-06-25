/* Es necesario usar function y no una arrowF por no poder acceder al this */
Object.prototype.log = function () {
    console.log(this);
};

const instancia = { propiedad: 1 };
instancia.log();

if(String.prototype.trim /* || true */) {
    String.prototype.trim = function () {
        try {
            console.log("String.prototype.trim");
            return this.replace(/^\s+|\s+$/g, "");
        } catch (error) {
            return this;
        }
    } 
}

const textString = "         text          ".trim();
textString.log();