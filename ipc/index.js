const DEFAULT_GREETER_COMMAND = 'greetd';

function runCommand(command) {
  try {
    const { execSync } = require('child_process');
    return execSync(command, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
  } catch (error) {
    return '';
  }
}

export function listUsers() {
  try {
    const output = runCommand('getent passwd');
    const lines = output.split('\n').filter(Boolean);
    return lines.map((line) => line.split(':')[0]);
  } catch (error) {
    return ['greeter'];
  }
}

export function startSession(user, command = 'Hyprland') {
  if (!user || !command) {
    return false;
  }

  try {
    const { execSync } = require('child_process');
    execSync(`su - ${user} -c "${command}"`, { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

export function getSessionCommand() {
  return `${DEFAULT_GREETER_COMMAND} --command`; 
}

export function createLoginSession(user, command) {
  return {
    user,
    command: command || 'Hyprland',
    available: !!user
  };
}
