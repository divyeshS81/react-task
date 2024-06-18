// http://localhost:3000/user DATA URL
import React, { useState, useEffect } from 'react';
import { getData, addCard, updateCard, deleteCard } from '../services/Service.js';

const Card = () => {
  const [datas, setdatas] = useState([]);
  const [newData, setnewData] = useState({ title: '', image: '' });
  const [editingData, seteditingData] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editImage, setEditImage] = useState('');

  useEffect(() => {
    fetchdatas();
  }, []);

  const fetchdatas = async () => {
    try {
      const data = await getData();
      setdatas(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddCard = async () => {
    try {
      const data = await addCard({ ...newData });
      setdatas([...datas, data]);
      setnewData({ title: '', image: '' });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleUpdateCard = async () => {
    try {
      const updatedUser = { ...editingData, title: editTitle, image: editImage };
      await updateCard(editingData.id, updatedUser);
      setdatas(datas.map(user => (user.id === editingData.id ? updatedUser : user)));
      seteditingData(null);
      setEditTitle('');
      setEditImage('');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      await deleteCard(id);
      setdatas(datas.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {datas.map(user => (
          <div key={user.id} className="border rounded-lg p-4 shadow">
            {editingData?.id === user.id ? (
              <div>
                <input
                  type="text"
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  className="w-full p-2 border rounded mb-2"
                />
                <input
                  type="text"
                  value={editImage}
                  onChange={e => setEditImage(e.target.value)}
                  className="w-full p-2 border rounded mb-2"
                />
                <button onClick={handleUpdateCard} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Save
                </button>
                <button onClick={() => {
                  seteditingData(null);
                  setEditTitle('');
                  setEditImage('');
                }} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <img src={user.image} alt={user.title} className="w-full h-40 object-cover mb-2" />
                <h2 className="text-xl font-bold">{user.title}</h2>
                <button onClick={() => {
                  seteditingData(user);
                  setEditTitle(user.title);
                  setEditImage(user.image);
                }} className="bg-yellow-500 text-white px-4 py-2 rounded mt-2">
                  Edit
                </button>
                <button onClick={() => handleDeleteCard(user.id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Add New Card</h2>
        <input
          type="text"
          value={newData.title}
          onChange={e => setnewData({ ...newData, title: e.target.value })}
          placeholder="Title"
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          value={newData.image}
          onChange={e => setnewData({ ...newData, image: e.target.value })}
          placeholder="Image URL"
          className="w-full p-2 border rounded mb-2"
        />
        <button onClick={handleAddCard} className="bg-green-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
