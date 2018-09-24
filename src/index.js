class Sorter {
    constructor() {
        // your implementation
        this.arr = [];
        this.compare = (a, b) => {
        return a - b;
        }
    }

    add(element) {
        this.arr.push(element);

    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr
    }

    sort(indices) {
        indices.sort((a, b) => {
            return a - b
        });

        var smth = [];
        for (i = 0; i < indices.length; i++) {
            smth.push(this.arr[indices[i]]);
        }

        smth.sort(this.compare);

        for (var i = 0; i < indices.length; i++) {
            this.arr.splice(indices[i], 1, smth[i]);
        }
    }

    setComparator(compareFunction) {
        this.compare = compareFunction;
    }
}

module.exports = Sorter;
