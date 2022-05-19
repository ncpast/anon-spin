const fs = require('fs');
const frames = fs.readFileSync('./frames.txt', { encoding: 'utf-8', flag: 'r' }).split('8');


(function render(index) {
    setTimeout(() => {
        console.clear();
        process.stdout.write('\r' + frames[index]);
        index++;
        if (index >= frames.length) return render(0);
        render(index);
    }, 200);
})(0);