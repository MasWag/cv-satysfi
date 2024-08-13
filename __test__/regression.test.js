const fs = require("fs");
const shell = require("shelljs");
const tmp = require("tmp");

const { toMatchPdfSnapshot } = require("jest-pdf-snapshot");

expect.extend({ toMatchPdfSnapshot });

shell.cd("__test__");

function compileSatysfi(src) {
  const tmpFile = tmp.fileSync();

  const { code: exitCode } = shell.exec(`satysfi ${src} -o ${tmpFile.name}`, {
    silent: true,
  });

  const pdfBuffer = fs.readFileSync(tmpFile.name);
  tmpFile.removeCallback();

  return {
    exitCode,
    pdfBuffer
  };
}

afterAll(() => {
  shell.rm("*test.satysfi-aux");
});

test("Satysfi is installed", () => {
  expect(shell.exec("satysfi -v").code).toBe(0);
});

describe(`SATySFi-CV class file`, () => {
  it(`Generates CV as expected`, () => {
    const result = compileSatysfi("../examples/example.saty");

    expect(result.exitCode).toBe(0);
    expect(result.pdfBuffer).toMatchPdfSnapshot();
  });
});

describe(`SATySFi-PublicationList class file`, () => {
  it(`Generates publication list as expected`, () => {
    const result = compileSatysfi("../examples/example_publication_list.saty");

    expect(result.exitCode).toBe(0);
    expect(result.pdfBuffer).toMatchPdfSnapshot();
  });
});

describe(`SATySFi-Commands`, () => {
  it(`Generates publication list in StdJa as expected`, () => {
    const result = compileSatysfi("../examples/example_commands.saty");

    expect(result.exitCode).toBe(0);
    expect(result.pdfBuffer).toMatchPdfSnapshot();
  });
});
