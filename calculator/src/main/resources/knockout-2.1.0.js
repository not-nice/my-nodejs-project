(function(window, document, undefined) {
    var undefinedType = "undefined",
        browserEngine = "unknown",
        isBrowser = typeof window !== undefinedType && typeof navigator !== undefinedType,
        doc = isBrowser ? document : null,
        elem = doc && doc.documentElement,
        element = doc && doc.createElement("div"),
        oproto = Object.prototype,
        ohasOwn = oproto.hasOwnProperty,
        arr = [],
        slice = arr.slice,
        class2type = {},
        toString = oproto.toString,
        version = "2.1.0",
        knockout = {};

    function isType(type) {
        return function(obj) {
            return toString.call(obj) === "[object " + type + "]";
        };
    }

    function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length,
            type = knockout.type(obj);

        if (type === "function" || knockout.isWindow(obj)) {
            return false;
        }

        return type === "array" || length === 0 ||
            typeof length === "number" && length > 0 && (length - 1) in obj;
    }

    knockout.isArray = Array.isArray || isType("Array");
    knockout.isFunction = isType("Function");
    knockout.isWindow = function(obj) {
        return obj != null && obj === obj.window;
    };
    knockout.type = function(obj) {
        if (obj == null) {
            return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ?
            class2type[toString.call(obj)] || "object" :
            typeof obj;
    };
    knockout.each = function(obj, callback) {
        var i = 0,
            length = obj.length,
            isArray = isArrayLike(obj);

        if (isArray) {
            for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                    break;
                }
            }
        } else {
            for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                    break;
                }
            }
        }
        return obj;
    };
    knockout.makeArray = function(obj) {
        if (obj == null) {
            return [];
        }
        if (isArrayLike(obj)) {
            return knockout.merge([], obj);
        }
        return slice.call(obj);
    };

    window.ko = knockout;

})(window, document);