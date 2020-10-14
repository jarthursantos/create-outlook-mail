import { execFile } from 'child_process'
import path from 'path'

export const isElectron = 'electron' in process.versions

export const isAsar = () => {
  if (!isElectron) return false

  if (require.main && require.main.filename) {
    return require.main.filename.includes("app.asar")
  }

  if (process.mainModule && process.mainModule.filename) {
    return process.mainModule.filename.includes("app.asar")
  }

  return false
}
  
export const fixPath = (path: string) => {
  return isAsar() ? path.replace("app.asar", "app.asar.unpacked") : path;
};

export const CONSOLE_EXE_PATH = fixPath(path.resolve(__dirname, 'console.exe'))

export const execAsync = (file: string, args: string[]): Promise<void> => {
  return new Promise((resolve, reject) => {
    execFile(file, args, error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};