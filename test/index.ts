import delay from "promise-resolve-timeout";
import { Spinner } from "../src/index";

const TIMEOUT = 1500;

const testUpdate = async () => {
  const spinner = new Spinner();

  spinner.start("Solving chess");

  const intervalId = setInterval(() => {
    spinner.update(Date.now().toString());
  }, 16);

  await delay(TIMEOUT);

  clearInterval(intervalId);

  spinner.stop();
};

const testWarning = async () => {
  const spinner = new Spinner();

  spinner.start("Solving chess");

  await delay(TIMEOUT);

  spinner.warning("Some warning message");
};

const testSuccess = async () => {
  const spinner = new Spinner();

  spinner.start("Solving chess");

  await delay(TIMEOUT);

  spinner.success("Some success message");
};

const testError = async () => {
  const spinner = new Spinner();

  spinner.start("Solving chess");

  await delay(TIMEOUT);

  spinner.error("Some error message");
};

const testStop = async () => {
  const spinner = new Spinner();

  spinner.start("Solving chess");

  await delay(TIMEOUT);

  spinner.stop();
};

const testLong = async () => {
  const spinner = new Spinner();

  spinner.start("Abc ".repeat(10000));

  await delay(TIMEOUT);

  spinner.stop();
};

const testPretty = async () => {
  const spinner = new Spinner();

  const messages = ["doing hard", "doing harder", "doing real hard", "doing"];

  spinner.start("doing");

  let iterations = 0;

  const intervalId = setInterval(() => {
    spinner.update(messages[iterations++ % messages.length]);
  }, 1000);

  await delay(4000);

  clearInterval(intervalId);

  spinner.success("chess done!");
};

const test = async () => {
  await testUpdate();
  await testWarning();
  await testSuccess();
  await testError();
  await testStop();
  await testLong();
  await testPretty();
};

test();
