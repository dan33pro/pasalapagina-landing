function err(message: string, code: number) {
  let e = new Error(message) as Error & { statusCode?: number };
  if (code) {
    e.statusCode = code;
  }
  return e;
}

export = err;
