const {
    Worker, 
    isMainThread, 
    parentPort, 
    workerData
  } = require('node:worker_threads');

  if (isMainThread) {
    console.log(`Main! process ID: ${process.pid}`);
    new Worker(__filename, {
        workerData: [7, 6, 2, 3]
      });
    new Worker(__filename, {
        workerData: [9, 1, 2, 0]
      });
  } else {
    console.log(`Worker! process ID: ${process.pid}`);
    console.log(`${workerData} sorted is ${workerData.sort()}`);
  }