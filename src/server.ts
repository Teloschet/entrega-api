// eslint-disable-next-line no-console
import { Signale } from 'signale';

import { app } from 'app';

export default class Server {
  public app;
  public log;

  private applicationPort = process.env.PORT;

  constructor() {
    this.app = app;
    this.log = new Signale();
  }

  async start() {
    app.listen(this.applicationPort, () => this.log.scope('Server').success('API started successfully'));
  }
}
