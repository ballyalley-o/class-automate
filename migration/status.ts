const roles = [
  {
    _id: '659bd57ac865058aa97d4c48',
    type: 'submitted',
    description: 'submitted the assignment or have committed on the assignment',
    isActive: true,
    isArchived: false,
    createdAt: '2024-01-08T10:59:06.790Z',
    updatedAt: '2024-01-08T11:03:25.930Z',
    __v: 0,
  },
  {
    _id: '659bdaacc865058aa97d4c56',
    type: 'unsubmitted',
    description:
      'assignment is unsubmitted nor committed, but assignment was accepted',
    isActive: true,
    isArchived: false,
    createdAt: '2024-01-08T11:21:16.409Z',
    updatedAt: '2024-01-08T11:23:32.097Z',
    __v: 0,
  },
  {
    _id: '659bdb71c865058aa97d4c5b',
    type: 'accepted',
    description:
      "assignment is accepted, but haven't submitted nor committed on any changes",
    isActive: true,
    isArchived: false,
    createdAt: '2024-01-08T11:24:33.704Z',
    updatedAt: '2024-01-08T11:24:33.704Z',
    __v: 0,
  },
  {
    _id: '659bdb9bc865058aa97d4c5f',
    type: 'unaccepted',
    description: 'assignment is unaccepted',
    isActive: true,
    isArchived: false,
    createdAt: '2024-01-08T11:25:15.033Z',
    updatedAt: '2024-01-08T11:25:15.033Z',
    __v: 0,
  },
  {
    _id: '659bdbd9c865058aa97d4c62',
    type: 'failed automated test',
    description: 'assignment is submitted but failed the automated test',
    isActive: true,
    isArchived: false,
    createdAt: '2024-01-08T11:26:17.758Z',
    updatedAt: '2024-01-08T11:26:17.758Z',
    __v: 0,
  },
  {
    _id: '659bdc05c865058aa97d4c65',
    type: 'passed automated test',
    description: 'assignment is submitted and passed the automated test',
    isActive: true,
    isArchived: false,
    createdAt: '2024-01-08T11:27:01.384Z',
    updatedAt: '2024-01-08T11:27:01.384Z',
    __v: 0,
  },
  {
    _id: '659bdc20c865058aa97d4c68',
    type: 'incomplete',
    description: 'assignment is submitted but incomplete',
    isActive: true,
    isArchived: false,
    createdAt: '2024-01-08T11:27:28.785Z',
    updatedAt: '2024-01-08T11:27:28.785Z',
    __v: 0,
  },
  {
    _id: '659bdc40c865058aa97d4c6b',
    type: 'completed',
    description: 'assignment is submitted and completed',
    isActive: true,
    isArchived: false,
    createdAt: '2024-01-08T11:28:00.907Z',
    updatedAt: '2024-01-08T11:28:00.907Z',
    __v: 0,
  },
  {
    _id: '659bdc63c865058aa97d4c6e',
    type: 'waiting',
    description: 'waiting for student',
    isActive: true,
    isArchived: false,
    createdAt: '2024-01-08T11:28:35.509Z',
    updatedAt: '2024-01-08T11:28:35.509Z',
    __v: 0,
  },
]

export default roles
