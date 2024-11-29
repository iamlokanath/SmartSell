const { PythonShell } = require('python-shell');

const predict = (data) => {
  return new Promise((resolve, reject) => {
    const options = {
      mode: 'text',
      pythonPath: 'python',  // Or 'python3' depending on your environment
      scriptPath: './python-backend',
      args: [data.age, data.screen_damage, data.battery_damage, data.ram, data.rom, data.make_receive_call, data.touch_screen_working, data.is_original_screen, data.model_name],
    };

    PythonShell.run('predict_model.py', options, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result[0]);
    });
  });
};

module.exports = {
  predict,
};
