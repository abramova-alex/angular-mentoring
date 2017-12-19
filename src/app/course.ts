import {ICourse} from './interfaces/course';

export class Course implements ICourse {
  constructor ( public id: number,
                public name: string,
                public duration: number,
                public date: Date,
                public info: string) {
  }
}
