const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return `${fieldName} is required`
    }
    return true
  }
}

module.exports = (plop) => {
  plop.setGenerator('function screen', {
    description: 'Create a screen component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your screen name?',
        validate: requireField('name'),
      },
    ],
    actions(data) {
      const allcap = capitalizeWords(data.name.split("/"));
      const filename = allcap.pop();
      const path = [allcap.join("/"), filename].join("/");
      if (!filename) throw new Error("No filename provided");
      return [
        {
          type: 'add',
          path: `app/screens/${path}/${filename}Container.tsx`,
          templateFile: 'plop-templates/fun-screen-template/container.tsx.hbs',
        },
        {
          type: 'add',
          path: `app/screens/${path}/${filename}Screen.tsx`,
          templateFile: 'plop-templates/fun-screen-template/screen.tsx.hbs',
        },
        {
          type: 'add',
          path: `app/screens/${path}/${filename}Style.tsx`,
          templateFile: 'plop-templates/fun-screen-template/style.tsx.hbs',
        },
      ]
    }
  })

  plop.setGenerator('screen', {
    description: 'Create a screen component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your screen name?',
        validate: requireField('name'),
      },
    ],
    actions(data) {
      const allcap = capitalizeWords(data.name.split("/"));
      const filename = allcap.pop();
      const path = [allcap.join("/"), filename].join("/");
      if (!filename) throw new Error("No filename provided");
      return [
        {
          type: 'add',
          path: `app/screens/${path}/${filename}Container.tsx`,
          templateFile: 'plop-templates/screen-template/container.tsx.hbs',
        },
        {
          type: 'add',
          path: `app/screens/${path}/${filename}Screen.tsx`,
          templateFile: 'plop-templates/screen-template/screen.tsx.hbs',
        },
        {
          type: 'add',
          path: `app/screens/${path}/${filename}Style.tsx`,
          templateFile: 'plop-templates/screen-template/style.tsx.hbs',
        },
      ]
    }
  })

  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name'),
      },
    ],
    actions(data) {
      const allcap = capitalizeWords(data.name.split("/"));
      const filename = allcap.pop();
      const path = [allcap.join("/"), filename].join("/");
      if (!filename) throw new Error("No filename provided");
      return [
        {
          type: 'add',
          path: `app/components/${path}.tsx`,
          templateFile: 'plop-templates/component.tsx.hbs',
        },
      ]
    }
  })
}

function capitalizeWords(arr) {
  return arr.map(element => element.split(/\s/g).filter(a => a).map(world => world.charAt(0).toUpperCase() + world.substring(1).toLowerCase()).join(""));
}
