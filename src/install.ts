import { TimerOptions } from '../config/index';
import Trigger from '../library/Trigger';

function install() {
  Trigger.init(TimerOptions.morning);
}

export default install;
