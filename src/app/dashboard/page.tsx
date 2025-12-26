export default function LeadsContactsPage() {
  const leads = [
    {
      id: 1,
      initials: 'JA',
      name: 'John Anderson',
      title: 'VP of Operations at TechCorp Industries',
      email: 'john@techcorp.com',
      phone: '+1(555) 123-4567',
      company: 'TechCorp Industries',
      location: 'San Francisco, CA',
      status: 'qualified',
      source: 'website',
      dealValue: '$85K',
      assignedTo: 'Sarah Chen',
      avatar: null
    },
    {
      id: 2,
      initials: 'ER',
      name: 'Emily Roberts',
      title: 'Director of IT at Global Solutions',
      email: 'john@techcorp.com',
      phone: '+1(555) 123-4567',
      company: 'Global Solutions',
      location: 'New York, NY',
      status: 'contacted',
      source: 'linkedin',
      dealValue: '$62K',
      assignedTo: 'Michael Ross',
      avatar: null
    },
    {
      id: 3,
      initials: 'DC',
      name: 'David Chen',
      title: 'CEO of StartupHub',
      email: 'david@startuphub.io',
      phone: '+1(555) 345-6789',
      company: 'StartupHub',
      location: 'Austin, TX',
      status: 'new',
      source: 'referral',
      dealValue: '$45K',
      assignedTo: 'Emily Davis',
      avatar: null
    },
    {
      id: 4,
      initials: 'LM',
      name: 'Lisa Martinez',
      title: 'Product Manager at Innovate Corp',
      email: 'lisa@innovate.com',
      phone: '+1(555) 456-7890',
      company: 'Innovate Corp',
      location: 'Chicago, IL',
      status: 'qualified',
      source: 'website',
      dealValue: '$35K',
      assignedTo: 'Lisa Martinez',
      avatar: null
    }
  ];

  const statusColors:Record<string,any> = {
    qualified: 'bg-green-100 text-green-700',
    contacted: 'bg-purple-100 text-purple-700',
    new: 'bg-blue-100 text-blue-700'
  };

  const sourceColors:Record<string,any> = {
    website: 'bg-orange-100 text-orange-700',
    linkedin: 'bg-blue-100 text-blue-700',
    referral: 'bg-red-100 text-red-700'
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
                <input
                  type="text"
                  placeholder="Search ....."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">⌘ K</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 ml-8">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <span className="text-gray-600">🔍</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <span className="text-gray-600">⚡</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <span className="text-gray-600">🔔</span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                <span className="font-medium">Warren</span>
                <span className="text-gray-400">▼</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto px-8 py-6">
          {/* Page Title */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Leads & Contacts</h1>
              <p className="text-gray-600 mt-1">Manage your leads and customer contacts</p>
            </div>
            <button className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-medium">
              <span className="text-xl">+</span>
              <span>Add Lead</span>
            </button>
          </div>

          {/* Tabs and Filters */}
          <div className="bg-white rounded-lg border border-gray-200 mb-6">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
                  <input
                    type="text"
                    placeholder="Search leads by name, company, or email..."
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 rounded-lg font-medium bg-yellow-400 text-gray-900">
                  All Leads (6)
                </button>
                <button className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100">
                  New (2)
                </button>
                <button className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100">
                  Qualified (2)
                </button>
                <button className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100">
                  Contacted (2)
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <span>⚡</span>
                  <span>Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Leads List */}
          <div className="space-y-4">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-semibold">{lead.initials}</span>
                    </div>

                    {/* Lead Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{lead.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[lead.status]}`}>
                          {lead.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${sourceColors[lead.source]}`}>
                          {lead.source}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{lead.title}</p>

                      {/* Contact Details */}
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <span>✉️</span>
                          <span>{lead.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <span>📞</span>
                          <span>{lead.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <span>📍</span>
                          <span>{lead.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <span>🏢</span>
                          <span>{lead.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Deal Value and Assigned To */}
                  <div className="flex flex-col items-end space-y-3 ml-6">
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-1">Deal Value</p>
                      <p className="text-xl font-bold text-green-600">{lead.dealValue}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{lead.assignedTo}</span>
                    </div>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <span className="text-gray-400">⋮</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
} 