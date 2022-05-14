import Model from '../src/models/model';

const messagesModel = new Model('messages');
export const messagesPage = async (req, res) => {
  try {
    const data = await messagesModel.select('name, message');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addMessage = async (req, res) => {
    const { name, message } = req.body;
    console.log(req.body)
    const columns = 'name, message';
    const values = `'${name}', '${message}'`;
    try {
      const data = await messagesModel.insertWithReturn(columns, values);
      res.status(200).json({ messages: data.rows });
    } catch (err) {
      res.status(200).json({ messages: err.stack });
    }
};

export const deleteMessage = async (req, res) => {
    console.log(req.body)
    const { id } = req.body 
    try {
        const data = await messagesModel.deleteWithReturn(id)
        res.status(200).json({ messages: data.rows });
    } catch (err) {
        res.status(200).json({ messages: err.stack });

    }
}