import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (studentData: Student) => {
  // if (await StudentModel.isUserExist(studentData.id)) {
  //   throw new Error('User already exist!');
  // }
  const result = await StudentModel.create(studentData); //built-in static method

  // const student = new StudentModel(studentData); //create an instance
  // if (await student.isUserExist(studentData.id)) {
  //   throw new Error('User already exist!');
  // }

  // const result = student.save(); //built-in instance method

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await StudentModel.findOne({ id });
  //using aggregate
  const result = await StudentModel.aggregate([{ $match: { id: id } }]);
  return result;
};

// delete student
const deleteStudentFromDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
