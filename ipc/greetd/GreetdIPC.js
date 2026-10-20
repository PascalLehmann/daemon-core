const DEFAULT_HYPRLAND_COMMAND = 'hyprctl';

function runCommand(command) {
  try {
    const { execSync } = require('child_process');
    return execSync(command, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
  } catch (error) {
    return '';
  }
}

export function getActiveWorkspace() {
  const output = runCommand(`${DEFAULT_HYPRLAND_COMMAND} activeworkspace -j`);

  try {
    const parsed = JSON.parse(output);
    return parsed || { id: 1 };
  } catch (error) {
    return { id: 1 };
  }
}

export function getWorkspaces() {
  const output = runCommand(`${DEFAULT_HYPRLAND_COMMAND} workspaces -j`);

  try {
    return JSON.parse(output) || [];
  } catch (error) {
    return [];
  }
}

export function getWindows() {
  const output = runCommand(`${DEFAULT_HYPRLAND_COMMAND} clients -j`);

  try {
    return JSON.parse(output) || [];
  } catch (error) {
    return [];
  }
}

export function notifyWindowChange(callback) {
  if (typeof callback !== 'function') {
    return null;
  }

  try {
    const { spawn } = require('child_process');
    const child = spawn(DEFAULT_HYPRLAND_COMMAND, ['--batch', 'activeworkspace', 'clients']);

    child.stdout.on('data', (chunk) => {
      callback(String(chunk));
    });

    return child;
  } catch (error) {
    return null;
  }
}
