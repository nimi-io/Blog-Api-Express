import Joi, { bool } from "joi";
interface IPostData {
  title: string;
  content: string;
}
export const validateCreatePostAsync = async (postData: IPostData) => {
  const schema = Joi.object({
    title: Joi.string().alphanum().required(),
    content: Joi.string().required(),
  });

  try {
    const validate = await schema.validateAsync(postData);
    return { status: true };
  } catch (error: any) {
    let err = [];
    console.log(error.details);
    for (let i = 0; i < error.details.length; i++) {
      err.push(error.details[0].message);
    }
    return { status: false, err };
  }
};
