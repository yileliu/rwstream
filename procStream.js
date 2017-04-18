process.stdin.resume();

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (chunk)=>{
    process.stdout.write('Data ! -> ' + chunk);
});

process.stdin.on('end', ()=>{
    process.stdout.write('End!');
})

console.log("node is running on process " + process.pid);
