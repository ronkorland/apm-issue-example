import { init as initApm } from '@elastic/apm-rum'

const apm = initApm({
  serviceName: 'example',
  serverUrl: 'http://localhost:8200',
  serviceVersion: '1.0.0'
})

const load = () => {
  return Promise.delay(1000).timeout(10000).finally(() => console.log("bluebird finally"));
};

function component() {
  const element = document.createElement('div');
  load();
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
