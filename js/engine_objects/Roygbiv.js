//  _______________________________________
// |                                       |
// | goldenhorse Engine scripting API          |
// |_______________________________________|
//
// Function types:
//  * Getter functions
//  * Object manipulation functions
//  * Utility functions
//  * Listener functions
//  * Particle system functions
//  * Motion blur functions
//  * Crosshair functions
//  * Text functions
//  * Model functions
//  * Control functions
//  * Animation functions
//  * Muzzleflash functions
//  * Lighting functions
//  * Lightning functions
//  * Sprite functions
//  * Container functions
//  * Virtual keyboard functions
//  * Script related functions
//  * Networking functions
//  * DOM functions
//  * AR functions
//  * AI functions
var goldenhorse = function(){

  this.axes = axes;

  this.rotationModes = rotationModes;

  this.endpoints = {
    PLUS_X: "+x",
    PLUS_Y: "+y",
    PLUS_Z: "+z",
    MINUS_X: "-x",
    MINUS_Y: "-y",
    MINUS_Z: "-z"
  };

  this.noop = noop;

  this.functionNames = [
    "getObject",
    "getParticleSystem",
    "getChildObject",
    "getRandomColor",
    "hide",
    "show",
    "vector",
    "distance",
    "sub",
    "add",
    "applyForce",
    "rotate",
    "rotateAroundXYZ",
    "setPosition",
    "color",
    "setMass",
    "translate",
    "getPosition",
    "opacity",
    "getOpacity",
    "setCollisionListener",
    "removeCollisionListener",
    "setParticleSystemRotation",
    "setParticleSystemQuaternion",
    "getMarkedPosition",
    "setExpireListener",
    "removeExpireListener",
    "normalizeVector",
    "computeQuaternionFromVectors",
    "multiplyScalar",
    "getParticleSystemVelocityAtTime",
    "stopParticleSystem",
    "startParticleSystem",
    "hideParticleSystem",
    "getCameraDirection",
    "getCameraPosition",
    "getParticleSystemPool",
    "getParticleSystemFromPool",
    "setVector",
    "quaternion",
    "fadeAway",
    "selectCrosshair",
    "changeCrosshairColor",
    "hideCrosshair",
    "startCrosshairRotation",
    "stopCrosshairRotation",
    "pauseCrosshairRotation",
    "expandCrosshair",
    "shrinkCrosshair",
    "setParticleSystemPosition",
    "startMotionBlur",
    "stopMotionBlur",
    "setObjectVelocity",
    "setObjectClickListener",
    "removeObjectClickListener",
    "setObjectColor",
    "resetObjectColor",
    "setScreenClickListener",
    "removeScreenClickListener",
    "setScreenMouseDownListener",
    "removeScreenMouseDownListener",
    "setScreenMouseUpListener",
    "removeScreenMouseUpListener",
    "setScreenMouseMoveListener",
    "removeScreenMouseMoveListener",
    "requestPointerLock",
    "convertEulerToDegrees",
    "setScreenPointerLockChangeListener",
    "removeScreenPointerLockChangeListener",
    "setParticleSystemPoolConsumedListener",
    "removeParticleSystemPoolConsumedListener",
    "setParticleSystemPoolAvailableListener",
    "removeParticleSystemPoolAvailableListener",
    "isKeyPressed",
    "setCameraPosition",
    "lookAt",
    "applyAxisAngle",
    "trackObjectPosition",
    "untrackObjectPosition",
    "createRotationPivot",
    "setRotationPivot",
    "unsetRotationPivot",
    "rotateCamera",
    "translateCamera",
    "requestFullScreen",
    "setFullScreenChangeCallbackFunction",
    "removeFullScreenChangeCallbackFunction",
    "isMouseDown",
    "intersectionTest",
    "getEndPoint",
    "isMobile",
    "lerp",
    "resetObjectVelocity",
    "setFPSDropCallbackFunction",
    "removeFPSDropCallbackFunction",
    "setPerformanceDropCallbackFunction",
    "removePerformanceDropCallbackFunction",
    "getViewport",
    "setUserInactivityCallbackFunction",
    "removeUserInactivityCallbackFunction",
    "pause",
    "setScreenKeydownListener",
    "removeScreenKeydownListener",
    "setScreenKeyupListener",
    "removeScreenKeyupListener",
    "getText",
    "setText",
    "setTextColor",
    "setTextAlpha",
    "setTextPosition",
    "setTextBackground",
    "removeTextBackground",
    "onTextClick",
    "removeTextClickListener",
    "setTextCenterPosition",
    "hideText",
    "showText",
    "getFPS",
    "executeForEachObject",
    "getRandomInteger",
    "isAnyFingerTouching",
    "getCurrentTouchCount",
    "setScreenMouseWheelListener",
    "removeScreenMouseWheelListener",
    "setScreenPinchListener",
    "removeScreenPinchListener",
    "setObjectMouseOverListener",
    "removeObjectMouseOverListener",
    "setObjectMouseOutListener",
    "removeObjectMouseOutListener",
    "onTextMouseOver",
    "removeTextMouseOverListener",
    "onTextMouseOut",
    "removeTextMouseOutListener",
    "onObjectPositionThresholdExceeded",
    "removeObjectPositionThresholdExceededListener",
    "createFreeControl",
    "createCustomControl",
    "setActiveControl",
    "createFPSControl",
    "setScreenDragListener",
    "removeScreenDragListener",
    "createOrbitControl",
    "isOrientationLandscape",
    "setScreenOrientationChangeListener",
    "removeScreenOrientationChangeListener",
    "executeForEachParticleSystem",
    "startScript",
    "stopScript",
    "startAnimation",
    "stopAnimation",
    "onAnimationFinished",
    "removeAnimationFinishListener",
    "showMuzzleFlash",
    "executeDelayed",
    "stopDelayedExecution",
    "changeScene",
    "getActiveSceneName",
    "freezeAnimationOnFinish",
    "unfreezeAnimation",
    "hideMuzzleFlash",
    "getAnimationState",
    "cancelAnimationRewind",
    "rewindAnimation",
    "getLightning",
    "startLightning",
    "setLightningStartPoint",
    "setLightningEndPoint",
    "stopLightning",
    "onAreaEnter",
    "onAreaExit",
    "removeAreaEnterListener",
    "removeAreaExitListener",
    "getSprite",
    "onSpriteClick",
    "removeSpriteClickListener",
    "onSpriteMouseOver",
    "removeSpriteMouseOverListener",
    "onSpriteMouseOut",
    "removeSpriteMouseOutListener",
    "onSpriteDragStart",
    "onSpriteDragStop",
    "onSpriteDragging",
    "removeSpriteDragStartListener",
    "removeSpriteDragStopListener",
    "removeSpriteDraggingListener",
    "areSpritesIntersected",
    "setSpriteColor",
    "setSpriteAlpha",
    "hideSprite",
    "showSprite",
    "setSpriteMargin",
    "setSpriteRotationAngle",
    "enableSpriteDragging",
    "disableSpriteDragging",
    "degreeToRadian",
    "getContainer",
    "onContainerClick",
    "removeContainerClickListener",
    "onContainerMouseOver",
    "removeContainerMouseOverListener",
    "onContainerMouseOut",
    "removeContainerMouseOutListener",
    "hideContainerBorder",
    "showContainerBorder",
    "setContainerBorderColor",
    "setContainerBackgroundColor",
    "setContainerBackgroundAlpha",
    "hideContainerBackground",
    "showContainerBackground",
    "getVirtualKeyboard",
    "activateVirtualKeyboard",
    "onVirtualKeyboardTextChange",
    "removeVirtualKeyboardTextChangeListener",
    "onVirtualKeyboardFlush",
    "removeVirtualKeyboardFlushListener",
    "hideVirtualKeyboard",
    "showVirtualKeyboard",
    "deactivateVirtualKeyboard",
    "activateTextInputMode",
    "deactivateTextInputMode",
    "mapTextureToSprite",
    "setLocationHash",
    "onLocationHashChange",
    "removeLocationHashChangeListener",
    "storeData",
    "getStoredData",
    "removeStoredData",
    "isDefined",
    "cancelSpriteDrag",
    "getSpriteMarginX",
    "getSpriteMarginY",
    "loadDynamicTextures",
    "connectToServer",
    "clearServerConnection",
    "onDisconnectedFromServer",
    "sendToServer",
    "onReceivedFromServer",
    "onLatencyUpdated",
    "applyCustomVelocity",
    "mapAreaPositionToArea",
    "createVectorPool",
    "getFromVectorPool",
    "getDynamicLight",
    "updateLightStrength",
    "updateLightColor",
    "updateLightDirection",
    "updateLightPosition",
    "attachPointLightToObject",
    "setSteeringBehavior",
    "stopSteerable",
    "setSteerableTargetPosition",
    "unsetSteerableTargetPosition",
    "setSteerableLookTarget",
    "getAStar",
    "findShortestPath",
    "hideFrom",
    "stopHiding",
    "pursue",
    "evade",
    "stopPursuing",
    "stopEvading",
    "getJumpDescriptor",
    "jump",
    "setPathFinishListener",
    "removePathFinishListener",
    "setObjectMouseMoveListener",
    "removeObjectMouseMoveListener",
    "startAllAnimations",
    "setPositionChangeListener",
    "removePositionChangeListener",
    "executeForEachWaypoint",
    "onSceneExit",
    "removeSceneExitListener",
    "setSteerableLookDirection",
    "getSteerableLookDirection",
    "setObjectRotationMode",
    "resetObjectRotation",
    "resetRandomPathBehavior",
    "getKnowledge",
    "getDecisionTree",
    "updateInformation",
    "makeDecision",
    "getStateMachine",
    "onStateEntry",
    "removeStateEntryListener",
    "resetStateMachine",
    "activateStateMachine",
    "deactivateStateMachine",
    "resetKnowledge",
    "getChildStateMachine",
    "createPathFollowingControl",
    "getClientDetails",
    "ongoldenhorseScoreUpdated",
    "removegoldenhorseScoreUpdateListener",
    "hideContainer",
    "showContainer",
    "getCurrentArea",
    "boundingBoxIntersectionTest",
    "setSpriteWidth",
    "setSpriteHeight",
    "cancelPointerLockRequests",
    "makeObjectLookAt",
    "vectorLength",
    "vectorLengthSquare",
    "getObjectVelocity",
    "getModelInstance",
    "getMaxTextureSize",
    "mapTexturesToModelInstance",
    "setPixelRatio",
    "createDOMElement",
    "setDOMElementPosition",
    "setDOMElementBackgroundColor",
    "setDOMElementOpacity",
    "setDOMElementSize",
    "onDOMElementMouseOver",
    "removeDOMElementMouseOverListener",
    "onDOMElementMouseOut",
    "removeDOMElementMouseOutListener",
    "onDOMElementClick",
    "removeDOMElementClickListener",
    "isARSupported",
    "startAugmentedReality",
    "setModelInstanceColor",
    "align3DPosition",
    "unalign3DPosition",
    "setModelInstanceTextureTransform",
    "setModelInstanceClickListener",
    "removeModelInstanceClickListener",
    "forEachChild",
    "createEventEmitter"
  ];

  this.globals = new Object();
}

// GETTER FUNCTIONS ************************************************************

//   Returns the object or glued object having the name given as the parameter,
//   or undefined if no such object or glued object is found.
goldenhorse.prototype.getObject = function(name){
  if (mode == 0){
    return;
  }
  var addedObject = addedObjects[name];
  var objectGroup = objectGroups[name];
  if (addedObject){
    return addedObject;
  }
  if (objectGroup){
    return objectGroup;
  }
}

//  Returns the particle system having the name given as the parameter,
//  or zero if no such particle system is found.
goldenhorse.prototype.getParticleSystem = function(name){
  if (mode == 0){
    return;
  }
  var particleSystem = particleSystemPool[name];
  if (particleSystem){
    return particleSystem;
  }else{
    return 0;
  }
}

//  Returns a child object having the name given as the second parameter
//  of a glued object given as the first parameter, or zero if no such object
//  is found.
goldenhorse.prototype.getChildObject = function(objectGroup, childObjectName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getChildObject, preConditions.objectGroup, objectGroup);
  preConditions.checkIfObjectGroup(goldenhorse.getChildObject, preConditions.objectGroup, objectGroup);
  var child = objectGroup.childObjectsByName[childObjectName];
  if (child){
    return child;
  }
  return 0;
}

//  Returns the HTML name of a random color.
goldenhorse.prototype.getRandomColor = function(){
  if (mode == 0){
    return;
  }
  return ColorNames.generateRandomColor();
}

//  Returns the (x, y, z) coordinates of an object, glued object, particle system or a model instance.
//  If a specific axis is specified, only the position on the specified axis is returned.
//  Note that axis should be one of goldenhorse.axes.X, goldenhorse.axes.Y or goldenhorse.axes.Z.
goldenhorse.prototype.getPosition = function(object, targetVector, axis){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getPosition, preConditions.object, object);
  preConditions.checkIfAxisOnlyIfDefined(goldenhorse.getPosition, preConditions.axis, axis);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.getPosition, preConditions.targetVector, targetVector);
  preConditions.checkIfAddedObjectObjectGroupParticleSystemModelInstance(goldenhorse.getPosition, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.getPosition, object);
  if (object.isAddedObject){
    if (axis){
      if (object.parentObjectName){
        var parentObject = objectGroups[object.parentObjectName];
        parentObject.graphicsGroup.position.copy(parentObject.mesh.position);
        parentObject.graphicsGroup.quaternion.copy(parentObject.mesh.quaternion);
        parentObject.graphicsGroup.updateMatrix();
        parentObject.graphicsGroup.updateMatrixWorld();
        var child = parentObject.graphicsGroup.children[object.indexInParent];
        child.getWorldPosition(REUSABLE_VECTOR);
        var worldPosition = REUSABLE_VECTOR;
        if (axis == this.axes.X){
          return worldPosition.x;
        }else if (axis == this.axes.Y){
          return worldPosition.y;
        }else if (axis == this.axes.Z){
          return worldPosition.z;
        }
      }
      if (axis == this.axes.X){
        return object.mesh.position.x;
      }else if (axis == this.axes.Y){
        return object.mesh.position.y;
      }else if (axis == this.axes.Z){
        return object.mesh.position.z;
      }
    }else{
      if (object.parentObjectName){
        var parentObject = objectGroups[object.parentObjectName];
        parentObject.graphicsGroup.position.copy(parentObject.mesh.position);
        parentObject.graphicsGroup.quaternion.copy(parentObject.mesh.quaternion);
        parentObject.graphicsGroup.updateMatrix();
        parentObject.graphicsGroup.updateMatrixWorld();
        var child = parentObject.graphicsGroup.children[object.indexInParent];
        child.getWorldPosition(REUSABLE_VECTOR);
        var worldPosition = REUSABLE_VECTOR;
        if (targetVector){
          targetVector.x = worldPosition.x;
          targetVector.y = worldPosition.y;
          targetVector.z = worldPosition.z;
          return targetVector;
        }else{
          return this.vector(worldPosition.x, worldPosition.y, worldPosition.z);
        }
      }
      if (targetVector){
        targetVector.x = object.mesh.position.x;
        targetVector.y = object.mesh.position.y;
        targetVector.z = object.mesh.position.z;
        return targetVector;
      }else{
        return this.vector(
          object.mesh.position.x,
          object.mesh.position.y,
          object.mesh.position.z
        );
      }
    }
  }else if (object.isObjectGroup){
    if (axis){
      if (axis == this.axes.X){
        return object.mesh.position.x;
      }else if (axis == this.axes.Y){
        return object.mesh.position.y;
      }else if (axis == this.axes.Z){
        return object.mesh.position.z;
      }
    }else{
      if (targetVector){
        targetVector.x = object.mesh.position.x;
        targetVector.y = object.mesh.position.y;
        targetVector.z = object.mesh.position.z;
        return targetVector;
      }else{
        return this.vector(
          object.mesh.position.x,
          object.mesh.position.y,
          object.mesh.position.z
        );
      }
    }
  }else if (object.isParticleSystem || object.isModelInstance){
    if (axis){
      if (axis == this.axes.X){
        return object.mesh.position.x;
      }else if (axis == this.axes.Y){
        return object.mesh.position.y;
      }else if (axis == this.axes.Z){
        return object.mesh.position.z;
      }
    }else{
      if (targetVector){
        targetVector.x = object.mesh.position.x;
        targetVector.y = object.mesh.position.y;
        targetVector.z = object.mesh.position.z;
        return targetVector;
      }else{
        return this.vector(
          object.mesh.position.x,
          object.mesh.position.y,
          object.mesh.position.z
        );
      }
    }
  }
}

//  Returns the opacity of given object.
goldenhorse.prototype.getOpacity = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getOpacity, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.getOpacity, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.getOpacity, object);
  if (object.isAddedObject){
    return object.mesh.material.uniforms.alpha.value;
  }
  return object.mesh.material.uniforms.totalAlpha.value;
}

//  Returns (x,y,z) coordinates of a point marked using the mark command.
goldenhorse.prototype.getMarkedPosition = function(markedPointName, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getMarkedPosition, preConditions.markedPointName, markedPointName);
  preConditions.checkIfDefined(goldenhorse.getMarkedPosition, preConditions.targetVector, targetVector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.getMarkedPosition, preConditions.targetVector, targetVector);
  var markedPoint = markedPoints[markedPointName];
  preConditions.checkIfMarkedPointExists(goldenhorse.getMarkedPosition, null, markedPoint);
  preConditions.checkIfMarkedPointInsideActiveScene(goldenhorse.getMarkedPosition, markedPoint);
  targetVector.x = markedPoint.x;
  targetVector.y = markedPoint.y;
  targetVector.z = markedPoint.z;
  return targetVector;
}

// Calcualtes and returns the velocity vector of a particle system at given time.
// For particles with circular motion, this function returns the angular velocity
// at given time.
goldenhorse.prototype.getParticleSystemVelocityAtTime = function(particleSystem, time, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getParticleSystemVelocityAtTime, preConditions.particleSystem, particleSystem);
  preConditions.checkIfParticleSystem(goldenhorse.getParticleSystemVelocityAtTime, preConditions.particleSystem, particleSystem);
  preConditions.checkIfDefined(goldenhorse.getParticleSystemVelocityAtTime, preConditions.time, time);
  preConditions.checkIfNumber(goldenhorse.getParticleSystemVelocityAtTime, preConditions.time, time);
  preConditions.checkIfDefined(goldenhorse.getParticleSystemVelocityAtTime, preConditions.targetVector, targetVector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.getParticleSystemVelocityAtTime, preConditions.targetVector, targetVector);
  preConditions.checkIfParticleSystemInsideActiveScene(goldenhorse.getParticleSystemVelocityAtTime, particleSystem);
  return particleSystem.getVelocityAtTime(time, targetVector);
}

// Returns the direction vector of the camera.
goldenhorse.prototype.getCameraDirection = function(targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getCameraDirection, preConditions.targetVector, targetVector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.getCameraDirection, preConditions.targetVector, targetVector);
  REUSABLE_VECTOR.set(0, 0, -1).applyQuaternion(camera.quaternion);
  targetVector.x = REUSABLE_VECTOR.x;
  targetVector.y = REUSABLE_VECTOR.y;
  targetVector.z = REUSABLE_VECTOR.z;
  return targetVector;
}

// Returns the position of the camera.
goldenhorse.prototype.getCameraPosition = function(targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getCameraPosition, preConditions.targetVector, targetVector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.getCameraPosition, preConditions.targetVector, targetVector);
  targetVector.x = camera.position.x;
  targetVector.y = camera.position.y;
  targetVector.z = camera.position.z;
  return targetVector;
}

// Finds a particle system pool by name and returns it.
goldenhorse.prototype.getParticleSystemPool = function(name){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getParticleSystemPool, preConditions.name, name);
  var psPool = particleSystemPools[name];
  preConditions.checkIfParticleSystemPoolExists(goldenhorse.getParticleSystemPool, null, psPool);
  preConditions.checkIfParticleSystemPoolInsideActiveScene(goldenhorse.getParticleSystemPool, psPool);
  return psPool;
}

// Returns an available particle system from the pool, or false if there is
// not an available particle system inside the pool. The particle systems become
// available when hidden or expired.
goldenhorse.prototype.getParticleSystemFromPool = function(pool){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getParticleSystemFromPool, preConditions.pool, pool);
  preConditions.checkIfParticleSystemPool(goldenhorse.getParticleSystemFromPool, preConditions.pool, pool);
  preConditions.checkIfPoolDestroyed(goldenhorse.getParticleSystemFromPool, null, pool);
  preConditions.checkIfParticleSystemPoolInsideActiveScene(goldenhorse.getParticleSystemPool, pool);
  return pool.get();
}

// Gets an end point of an object. The axis may be one of:
// goldenhorse.endpoints.MINUS_X
// goldenhorse.endpoints.MINUS_Y
// goldenhorse.endpoints.MINUS_Z
// goldenhorse.endpoints.PLUS_X
// goldenhorse.endpoints.PLUS_Y
// goldenhorse.endpoints.PLUS_Z
//
// Note that object groups do not support this function but child objects do.
// This function may be useful in cases where for example a particle system needs
// to be started from the tip point of an object.
goldenhorse.prototype.getEndPoint = function(object, axis, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getEndPoint, preConditions.object, object);
  preConditions.checkIfAddedObject(goldenhorse.getEndPoint, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.getEndPoint, preConditions.axis, axis);
  preConditions.checkIfDefined(goldenhorse.getEndPoint, preConditions.targetVector, targetVector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.getEndPoint, preConditions.targetVector, targetVector);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.getEndPoint, object);
  preConditions.checkIfEndPointAxis(goldenhorse.getEndPoint, preConditions.axis, axis);
  var endPoint = object.getEndPoint(axis);
  targetVector.x = endPoint.x;
  targetVector.y = endPoint.y;
  targetVector.z = endPoint.z;
  return targetVector;
}

// Returns the current viewport object having startX, startY, width and height parameters.
// Do not modify the values of the returned object.
goldenhorse.prototype.getViewport = function(){
  if (mode == 0){
    return;
  }
  return currentViewport;
}

// Returns a text object or 0 if the text does not exist.
goldenhorse.prototype.getText = function(textName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getText, preConditions.textName, textName);
  var text = addedTexts[textName];
  if (text){
    preConditions.checkIfTextInsideActiveScene(goldenhorse.getText, text);
    return text;
  }
  return 0;
}

// Returns the current FPS.
goldenhorse.prototype.getFPS = function(){
  if (mode == 0){
    return;
  }
  return fpsHandler.fps;
}

// Returns the active scene name.
goldenhorse.prototype.getActiveSceneName = function(){
  if (mode == 0){
    return;
  }
  return sceneHandler.getActiveSceneName();
}

// Returns the animation state. The animation state can be these global enums:
// ANIMATION_STATE_NOT_RUNNING (0)
// ANIMATION_STATE_RUNNING (1)
// ANIMATION_STATE_FROZEN (2)
// ANIMATION_STATE_REWINDING (3)
goldenhorse.prototype.getAnimationState = function(object, animationName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getAnimationState, preConditions.object, object);
  preConditions.checkIfAddedObjectObjectGroupAddedTextSpriteContainerModelInstance(goldenhorse.getAnimationState, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.getAnimationState, preConditions.animationName, animationName);
  preConditions.checkIfAnimationExists(goldenhorse.getAnimationState, object, animationName);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.getAnimationState, object);
  return object.animations[animationName].animationState;
}

// Returns a lightning object or 0 if lightning does not exist.
goldenhorse.prototype.getLightning = function(lightningName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getLightning, preConditions.lightningName, lightningName);
  var lightning = lightnings[lightningName];
  if (lightning){
    preConditions.checkIfLightningInsideActiveScene(goldenhorse.getLightning, lightning);
    return lightning;
  }
  return 0;
}

// Returns a sprite object or 0 if sprite does not exist.
goldenhorse.prototype.getSprite = function(spriteName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getSprite, preConditions.spriteName, spriteName);
  var sprite = sprites[spriteName];
  if (sprite){
    preConditions.checkIfSpriteInsideActiveScene(goldenhorse.getSprite, sprite);
    return sprite;
  }
  return 0;
}

// Returns a container or 0 if container does not exist.
goldenhorse.prototype.getContainer = function(containerName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getContainer, preConditions.containerName, containerName);
  var container = containers[containerName];
  if (container){
    preConditions.checkIfContainerInsideActiveScene(goldenhorse.getContainer, container);
    return container;
  }
  return 0;
}

// Returns a virtual keyboard or 0 if virtual keyboard does not exist.
goldenhorse.prototype.getVirtualKeyboard = function(virtualKeyboardName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getVirtualKeyboard, preConditions.virtualKeyboardName, virtualKeyboardName);
  var virtualKeyboard = virtualKeyboards[virtualKeyboardName];
  if (virtualKeyboard){
    preConditions.checkIfVirtualKeyboardInsideActiveScene(goldenhorse.getVirtualKeyboard, virtualKeyboard);
    return virtualKeyboard;
  }
  return 0;
}

// Returns the marginX value of given sprite.
goldenhorse.prototype.getSpriteMarginX = function(sprite){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getSpriteMarginX, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.getSpriteMarginX, preConditions.sprite, sprite);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.getSpriteMarginX, sprite);
  return sprite.getMarginXPercent();
}

// Returns the marginY value of given sprite.
goldenhorse.prototype.getSpriteMarginY = function(sprite){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getSpriteMarginY, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.getSpriteMarginY, preConditions.sprite, sprite);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.getSpriteMarginY, sprite);
  return sprite.getMarginYPercent();
}

// Returns a dynamic light or 0 if dynamic light does not exist.
goldenhorse.prototype.getDynamicLight = function(dynamicLightName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getDynamicLight, preConditions.dynamicLightName, dynamicLightName);
  return lightHandler.dynamicLights[dynamicLightName] || 0;
}

// Returns an AStar object or 0 if AStar does not exist.
goldenhorse.prototype.getAStar = function(aStarName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getAStar, preConditions.aStarName, aStarName);
  var aStar = steeringHandler.usedAStarIDs[aStarName];
  if (aStar){
    preConditions.checkIfAStarInActiveScene(goldenhorse.getAStar, aStarName);
    return aStar;
  }
  return 0;
}

// Returns a JumpDescriptor object or 0 if JumpDescriptor does not exist.
goldenhorse.prototype.getJumpDescriptor = function(jdName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getJumpDescriptor, preConditions.jdName, jdName);
  var jumpDescriptor = steeringHandler.usedJumpDescriptorIDs[jdName];
  if (jumpDescriptor){
    preConditions.checkIfJumpDescriptorInActiveScene(goldenhorse.getJumpDescriptor, jdName);
    return jumpDescriptor;
  }
  return 0;
}

// Returns a Knowledge or 0 if Knowledge of given name does not exist.
goldenhorse.prototype.getKnowledge = function(knowledgeName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getKnowledge, preConditions.knowledgeName, knowledgeName);

  var knowledge = decisionHandler.getKnowledge(knowledgeName);

  return knowledge || 0;
}

// Returns a DecisionTree or 0 if DecisionTree of given name does not exist.
goldenhorse.prototype.getDecisionTree = function(decisionTreeName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getDecisionTree, preConditions.decisionTreeName, decisionTreeName);

  var decisionTree = decisionHandler.getDecisionTree(decisionTreeName);

  return decisionTree || 0;
}

// Returns a StateMachine or 0 if StateMachine of given name does not exist.
goldenhorse.prototype.getStateMachine = function(stateMachineName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getStateMachine, preConditions.stateMachineName, stateMachineName);

  var stateMachine = decisionHandler.getStateMachine(stateMachineName);

  return stateMachine || 0;
}

// Returns a child state machine of given state machine or 0 if the child does not exist.
// This API is esepcially useful for cloned state machines for accessing to their
// children in order to add state change listeners to them.
goldenhorse.prototype.getChildStateMachine = function(stateMachine, childStateMachineName){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.getChildStateMachine, preConditions.stateMachine, stateMachine);
  preConditions.checkIfDefined(goldenhorse.getChildStateMachine, preConditions.childStateMachineName, childStateMachineName);
  preConditions.checkIfStateMachine(goldenhorse.getChildStateMachine, stateMachine);

  return decisionHandler.getChildStateMachine(stateMachine, childStateMachineName) || 0;
}

// Returns the name of current area in which the camera is.
goldenhorse.prototype.getCurrentArea = function(){
  if (mode == 0){
    return;
  }

  areaConfigurationsHandler.handle();
  return areaConfigurationsHandler.currentArea;
}

// Returns the velocity of given object.
goldenhorse.prototype.getObjectVelocity = function(object, targetVector){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.getObjectVelocity, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.getObjectVelocity, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.getObjectVelocity, object);
  preConditions.checkIfDefined(goldenhorse.getObjectVelocity, preConditions.targetVector, targetVector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.getObjectVelocity, preConditions.targetVector, targetVector);
  preConditions.checkIfNoMass(goldenhorse.getObjectVelocity, preConditions.object, object);

  var velocity = object.physicsBody.velocity;
  targetVector.x = velocity.x;
  targetVector.y = velocity.y;
  targetVector.z = velocity.z;
  return targetVector;
}

// Returns a ModelInstance or 0 if ModelInstance of given name does not exist.
goldenhorse.prototype.getModelInstance = function(modelInstanceName){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.getModelInstance, preConditions.modelInstanceName, modelInstanceName);

  return modelInstances[modelInstanceName] || 0;
}

// OBJECT MANIPULATION FUNCTIONS ***********************************************

//  Hides an object or a glued object, removes it from the scene. Does nothing
//  if the object is already hidden. The additional keepPhysics parameter can
//  be used in order to hide only the graphical representation of the object
//  but keep its physicsal body. The default value of keepPhysics is false.
goldenhorse.prototype.hide = function(object, keepPhysics){
  if (mode == 0){
    return;
  }
  preConditions.checkIfBooleanOnlyIfExists(goldenhorse.hide, preConditions.keepPhysics, keepPhysics);
  var keepPhysicsValue = keepPhysics;
  preConditions.checkIfDefined(goldenhorse.hide, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.hide, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.hide, object);
  if (object.isAddedObject){
    preConditions.checkIfChildObjectOnlyIfExists(goldenhorse.hide, preConditions.object, object);
    if (keepPhysicsValue){
      preConditions.checkIfNoMass(goldenhorse.hide, preConditions.object, object);
    }
    preConditions.checkIfChangeable(goldenhorse.hide, preConditions.object, object);
    object.hide(keepPhysicsValue);
  }else if (object.isObjectGroup){
    if (keepPhysicsValue){
      preConditions.checkIfNoMass(goldenhorse.hide, preConditions.object, object);
    }
    preConditions.checkIfChangeable(goldenhorse.hide, preConditions.object, object);
    object.hide(keepPhysicsValue);
  }
}

//  Makes a hidden object or glued object visible. Does nothing if the object is
//  already visible.
goldenhorse.prototype.show = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.show, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.show, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.show, object);
  if (object.isAddedObject){
    preConditions.checkIfChildObjectOnlyIfExists(goldenhorse.show, preConditions.object, object);
    preConditions.checkIfChangeable(goldenhorse.show, preConditions.object, object);
    object.show();
  }else if (object.isObjectGroup){
    preConditions.checkIfChangeable(goldenhorse.show, preConditions.object, object);
    object.show();
  }
}

// Applies a physical force to an object or a glued object from a given point.
goldenhorse.prototype.applyForce = function(object, force, point){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.applyForce, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.applyForce, preConditions.object, object);
  preConditions.checkIfNoMass(goldenhorse.applyForce, preConditions.object, object);
  preConditions.checkIfDynamic(goldenhorse.applyForce, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.applyForce, preConditions.force, force);
  preConditions.checkIfDefined(goldenhorse.applyForce, preConditions.point, point);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.applyForce, preConditions.force, force);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.applyForce, preConditions.point, point);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.applyForce, object);
  REUSABLE_CANNON_VECTOR.set(force.x, force.y, force.z);
  REUSABLE_CANNON_VECTOR_2.set(point.x, point.y, point.z);
  object.physicsBody.applyImpulse(
    REUSABLE_CANNON_VECTOR,
    REUSABLE_CANNON_VECTOR_2
  );
  physicsWorld.applyImpulse(object, REUSABLE_CANNON_VECTOR, REUSABLE_CANNON_VECTOR_2);
}

//  Rotates an object or a glued object around a given axis by given radians.
//  The parameter axis must be one of goldenhorse.axes.X, goldenhorse.axes.Y or goldenhorse.axes.Z.
//  Objects are rotated around their own centers, so their positions do not change when
//  rotated using this function. If object has a local rotation mode set, the rotation
//  is performed around it's local axis, it's performed around the world axis otherwise.
goldenhorse.prototype.rotate = function(object, axis, radians){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.rotate, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.rotate, preConditions.axis, axis);
  preConditions.checkIfAxisOnlyIfDefined(goldenhorse.rotate, preConditions.axis, axis);
  preConditions.checkIfNumber(goldenhorse.rotate, preConditions.radians, radians);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.rotate, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.rotate, object);
  if (object.isAddedObject && object.parentObjectName){
    var parentObject = objectGroups[object.parentObjectName];
    if (parentObject){
      this.rotateAroundXYZ(
        parentObject,
        object.getPositionAtAxis("x"),
        object.getPositionAtAxis("y"),
        object.getPositionAtAxis("z"),
        radians,
        axis
      );
      return;
    }
  }
  preConditions.checkIfChangeable(goldenhorse.rotate, preConditions.object, object);
  object.handleRotation(axis, radians);
}

//  Rotates an object or a glued object around the given (x, y, z)
//  Unlike the rotate function, the positions of the objects can change when rotated
//  using this function. Note that axis must be one of goldenhorse.axes.X, goldenhorse.axes.Y
//  or goldenhorse.axes.Z.
goldenhorse.prototype.rotateAroundXYZ = function(object, x, y, z, radians, axis){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.rotateAroundXYZ, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.rotateAroundXYZ, preConditions.x, x);
  preConditions.checkIfDefined(goldenhorse.rotateAroundXYZ, preConditions.y, y);
  preConditions.checkIfDefined(goldenhorse.rotateAroundXYZ, preConditions.z, z);
  preConditions.checkIfNumber(goldenhorse.rotateAroundXYZ, preConditions.x, x);
  preConditions.checkIfNumber(goldenhorse.rotateAroundXYZ, preConditions.y, y);
  preConditions.checkIfNumber(goldenhorse.rotateAroundXYZ, preConditions.z, z);
  preConditions.checkIfDefined(goldenhorse.rotateAroundXYZ, preConditions.radians, radians);
  preConditions.checkIfNumber(goldenhorse.rotateAroundXYZ, preConditions.radians, radians);
  preConditions.checkIfDefined(goldenhorse.rotateAroundXYZ, preConditions.axis, axis);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.rotateAroundXYZ, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.rotateAroundXYZ, object);
  preConditions.checkIfAxisOnlyIfDefined(goldenhorse.rotateAroundXYZ, preConditions.axis, axis);
  var axisVector;
  if (axis == this.axes.X){
    axisVector = THREE_AXIS_VECTOR_X;
  }else if (axis== this.axes.Y){
    axisVector = THREE_AXIS_VECTOR_Y;
  }else if (axis == this.axes.Z){
    axisVector = THREE_AXIS_VECTOR_Z;
  }
  var mesh;
  if (object.isAddedObject){
    if (object.parentObjectName){
      var parentObject = objectGroups[object.parentObjectName];
      if (parentObject){
        this.rotateAroundXYZ(
          parentObject,
          x, y, z,
          radians,
          axis
        );
        return;
      }
    }
    preConditions.checkIfChangeable(goldenhorse.rotateAroundXYZ, preConditions.object, object);
  }else if (object.isObjectGroup){
    preConditions.checkIfChangeable(goldenhorse.rotateAroundXYZ, preConditions.object, object);
  }
  object.prevPositionVector.copy(object.mesh.position);
  object.rotateAroundXYZ(x, y, z, axis, axisVector, radians);
  physicsWorld.updateObject(object, false, true);
  if (object.autoInstancedParent){
    object.autoInstancedParent.updateObject(object);
  }
  object.onPositionChange(object.prevPositionVector, object.mesh.position);
}

//  Puts an object or glued object to the specified (x, y, z) coordinate.
goldenhorse.prototype.setPosition = function(obj, x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setPosition, preConditions.obj, obj);
  preConditions.checkIfDefined(goldenhorse.setPosition, preConditions.x, x);
  preConditions.checkIfDefined(goldenhorse.setPosition, preConditions.y, y);
  preConditions.checkIfDefined(goldenhorse.setPosition, preConditions.z, z);
  preConditions.checkIfNumber(goldenhorse.setPosition, preConditions.x, x);
  preConditions.checkIfNumber(goldenhorse.setPosition, preConditions.y, y);
  preConditions.checkIfNumber(goldenhorse.setPosition, preConditions.z, z);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setPosition, preConditions.obj, obj);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setPosition, obj);
  if (obj.parentObjectName){
    var objGroup = objectGroups[obj.parentObjectName];
    preConditions.checkIfParentExists(goldenhorse.setPosition, null, objGroup);
    this.setPosition(objGroup, x, y, z);
    return;
  }
  preConditions.checkIfChangeable(goldenhorse.setPosition, preConditions.obj, obj);
  obj.setPosition(x, y, z);
}

//  Sets the mass property of an object or a glued object. Objects are considered
//  dynamic if and only if their mass is greater than zero.
goldenhorse.prototype.setMass = function(object, mass){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setMass, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.setMass, preConditions.mass, mass);
  preConditions.checkIfNumber(goldenhorse.setMass, preConditions.mass, mass);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setMass, preConditions.object, object);
  preConditions.checkIfChangeable(goldenhorse.setMass, preConditions.object, object);
  preConditions.checkIfNoMass(goldenhorse.setMass, preConditions.object, object);
  preConditions.checkIfChildObjectOnlyIfExists(goldenhorse.setMass, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setMass, object);
  if (typeof object.originalMass == UNDEFINED){
    object.originalMass = object.mass;
  }
  if (typeof object.mass == UNDEFINED){
    object.originalMass = 0;
    object.mass = 0;
  }
  object.setMass(mass);
  physicsWorld.setMass(object, mass);
  if (object.isAddedObject){
    if (mass > 0){
      dynamicObjects.set(object.name,  object);
      sceneHandler.onDynamicObjectAddition(object);
    }else{
      dynamicObjects.delete(object.name);
      sceneHandler.onDynamicObjectDeletion(object);
    }
  }else if (object.isObjectGroup){
    if (mass > 0){
      dynamicObjectGroups.set(object.name, object);
      sceneHandler.onDynamicObjectAddition(object);
    }else{
      dynamicObjectGroups.delete(object.name);
      sceneHandler.onDynamicObjectDeletion(object);
    }
  }
}

//  Translates an object or glued object on the given axis by the given amount.
//  Axis must be one of goldenhorse.axes.X, goldenhorse.axes.Y or goldenhorse.axes.Z.
goldenhorse.prototype.translate = function(object, axis, amount){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.translate, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.translate, preConditions.axis, axis);
  preConditions.checkIfDefined(goldenhorse.translate, preConditions.amount, amount);
  preConditions.checkIfAxisOnlyIfDefined(goldenhorse.translate, preConditions.axis, axis);
  preConditions.checkIfNumber(goldenhorse.translate, preConditions.amount, amount);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.translate, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.translate, object);
  if (object.isAddedObject){
    if (object.parentObjectName){
      var parentObject = objectGroups[object.parentObjectName];
      if (parentObject){
        this.translate(parentObject, axis, amount);
        return;
      }
    }
  }
  preConditions.checkIfChangeable(goldenhorse.translate, preConditions.object, object);
  object.translate(axis, amount, true);
  physicsWorld.updateObject(object, true, false);
  if (object.autoInstancedParent){
    object.autoInstancedParent.updateObject(object);
  }
}

//  Increases/decreases the opacity of given object.
goldenhorse.prototype.opacity = function(object, delta){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.opacity, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.opacity, preConditions.delta, delta);
  preConditions.checkIfNumber(goldenhorse.opacity, preConditions.delta, delta);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.opacity, preConditions.object, object);
  preConditions.checkIfChildObjectOnlyIfExists(goldenhorse.opacity, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.opacity, object);
  if (!object.initOpacitySet && (object.isAddedObject)){
    object.initOpacity = object.mesh.material.uniforms.alpha.value;
    object.initOpacitySet = true;
  }else if (!object.initOpacitySet && (object.isObjectGroup)){
    object.initOpacity = object.mesh.material.uniforms.totalAlpha.value;
    object.initOpacitySet = true;
  }
  object.incrementOpacity(delta);
  if (object.isAddedObject){
    if (object.mesh.material.uniforms.alpha.value < 0){
      object.updateOpacity(0);
    }
    if (object.mesh.material.uniforms.alpha.value > 1){
      object.updateOpacity(1);
    }
  }else if (object.isObjectGroup){
    if (object.mesh.material.uniforms.totalAlpha.value < 0){
      object.updateOpacity(0);
    }
    if (object.mesh.material.uniforms.totalAlpha.value > 1){
      object.updateOpacity(1);
    }
  }

  smartRenderingHandler.invalidate();
}

//  Sets the velocity of an object or a glued object. The object must be a dynamic object
//  (mass > 0) in order to have a velocity. If optional axis parameter is used
//  velocity on only given axis is set. Note that axis must be one of goldenhorse.axes.X,
//  goldenhorse.axes.Y or goldenhorse.axes.Z.
goldenhorse.prototype.setObjectVelocity = function(object, velocityVector, axis){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setObjectVelocity, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setObjectVelocity, preConditions.object, object);
  preConditions.checkIfChangeable(goldenhorse.setObjectVelocity, preConditions.object, object);
  preConditions.checkIfChildObjectOnlyIfExists(goldenhorse.setObjectVelocity, preConditions.object, object);
  preConditions.checkIfDynamic(goldenhorse.setObjectVelocity, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.setObjectVelocity, preConditions.velocityVector, velocityVector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.setObjectVelocity, preConditions.velocityVector, velocityVector);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setObjectVelocity, object);
  if (!(typeof axis == UNDEFINED)){
    preConditions.checkIfAxisOnlyIfDefined(goldenhorse.setObjectVelocity, preConditions.axis, axis);
    if (axis == this.axes.X){
      object.setVelocityX(velocityVector.x);
    }else if (axis == this.axes.Y){
      object.setVelocityY(velocityVector.y);
    }else if (axis == this.axes.Z){
      object.setVelocityZ(velocityVector.z);
    }
    return;
  }
  object.setVelocity(velocityVector);
}

// Modifies the color and alpha value of an object or an object group.
goldenhorse.prototype.setObjectColor = function(object, colorName, alpha){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setObjectColor, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setObjectColor, preConditions.object, object);
  preConditions.checkIfColorizable(goldenhorse.setObjectColor, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.setObjectColor, preConditions.colorName, colorName);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setObjectColor, object);
  if (typeof alpha == UNDEFINED){
    alpha = 1;
  }else{
    preConditions.checkIfNumber(goldenhorse.setObjectColor, preConditions.alpha, alpha);
  }
  REUSABLE_COLOR.set(colorName);
  if (object.autoInstancedParent){
    object.autoInstancedParent.forceColor(object, REUSABLE_COLOR.r, REUSABLE_COLOR.g, REUSABLE_COLOR.b, alpha);
  }
  object.forceColor(REUSABLE_COLOR.r, REUSABLE_COLOR.g, REUSABLE_COLOR.b, alpha);
}

// Resets the color and alpha value of an object or an object group.
goldenhorse.prototype.resetObjectColor = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.resetObjectColor, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.resetObjectColor, preConditions.object, object);
  preConditions.checkIfColorizable(goldenhorse.resetObjectColor, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.resetObjectColor, object);
  if (object.autoInstancedParent){
    object.autoInstancedParent.resetColor(object);
  }
  object.resetColor();
}

// Sets a rotation pivot for an object created with createRotationPivot API.
goldenhorse.prototype.setRotationPivot = function(rotationPivot){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setRotationPivot, preConditions.rotationPivot, rotationPivot);
  preConditions.checkIfRotationPivot(goldenhorse.setRotationPivot, preConditions.rotat, rotationPivot);
  var sourceObject = rotationPivot.sourceObject;
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setRotationPivot, sourceObject);
  sourceObject.setRotationPivot(rotationPivot);
}

// Unsets a rotation pivot point for an object set with setRotationPivot API.
goldenhorse.prototype.unsetRotationPivot = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.unsetRotationPivot, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.unsetRotationPivot, preConditions.object, object);
  preConditions.checkIfHavePivotPoint(goldenhorse.unsetRotationPivot, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.unsetRotationPivot, object);
  object.unsetRotationPivot();
}

// Resets the velocity and angular velocity of an object.
goldenhorse.prototype.resetObjectVelocity = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.resetObjectVelocity, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.resetObjectVelocity, preConditions.object, object);
  preConditions.checkIfChangeable(goldenhorse.resetObjectVelocity, preConditions.object, object);
  preConditions.checkIfChildObjectOnlyIfExists(goldenhorse.resetObjectVelocity, preConditions.object, object);
  preConditions.checkIfDynamic(goldenhorse.resetObjectVelocity, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.resetObjectVelocity, object);
  object.resetVelocity();
}

// Sets the rotation mode of given object. rotationMode parameter may be either
// goldenhorse.rotationModes.LOCAL or goldenhorse.rotationModes.WORLD. Local rotation
// mode indicates objects rotating around their own local axis unlike the world
// axis.
goldenhorse.prototype.setObjectRotationMode = function(object, rotationMode){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.setObjectRotationMode, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.setObjectRotationMode, preConditions.rotationMode, rotationMode);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setObjectRotationMode, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setObjectRotationMode, object);
  preConditions.checkIfChildObjectOnlyIfExists(goldenhorse.setObjectRotationMode, preConditions.object, object);
  preConditions.checkIfRotationMode(goldenhorse.setObjectRotationMode, rotationMode);
  preConditions.checkIfHaveNotPivotPoint(goldenhorse.setObjectRotationMode, preConditions.object, object);

  object.setRotationMode(rotationMode);
}

// Resets all the rotations applied to given object.
goldenhorse.prototype.resetObjectRotation = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.rotate, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.rotate, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.rotate, object);
  preConditions.checkIfChangeable(goldenhorse.rotate, preConditions.object, object);

  object.resetRotation();
}

// Rotates an object and makes it look at given (x, y, z) coordinate.
goldenhorse.prototype.makeObjectLookAt = function(object, x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.makeObjectLookAt, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.makeObjectLookAt, preConditions.x, x);
  preConditions.checkIfDefined(goldenhorse.makeObjectLookAt, preConditions.y, y);
  preConditions.checkIfDefined(goldenhorse.makeObjectLookAt, preConditions.z, z);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.makeObjectLookAt, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.makeObjectLookAt, object);
  preConditions.checkIfChangeable(goldenhorse.makeObjectLookAt, preConditions.object, object);
  preConditions.checkIfNumber(goldenhorse.makeObjectLookAt, preConditions.x, x);
  preConditions.checkIfNumber(goldenhorse.makeObjectLookAt, preConditions.y, y);
  preConditions.checkIfNumber(goldenhorse.makeObjectLookAt, preConditions.z, z);

  object.lookAt(x, y, z);
}

// PARTICLE SYSTEM FUNCTIONS ***************************************************

//  Sets the rotation of a particle system around given axis. Note that axis must be
//  one of goldenhorse.axes.X, goldenhorse.axes.Y or goldenhorse.axes.Z.
goldenhorse.prototype.setParticleSystemRotation = function(particleSystem, axis, radians){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setParticleSystemRotation, preConditions.particleSystem, particleSystem);
  preConditions.checkIfDefined(goldenhorse.setParticleSystemRotation, preConditions.axis, axis);
  preConditions.checkIfDefined(goldenhorse.setParticleSystemRotation, preConditions.radians, radians);
  preConditions.checkIfAxisOnlyIfDefined(goldenhorse.setParticleSystemRotation, preConditions.axis, axis);
  preConditions.checkIfNumber(goldenhorse.setParticleSystemRotation, preConditions.radians, radians);
  preConditions.checkIfTrue(goldenhorse.setParticleSystemRotation, "particleSystem is not visible", (!particleSystem.mesh.visible));
  preConditions.checkIfTrue(goldenhorse.setParticleSystemRotation, "particleSystem has a collision callback attached. Cannot set rotation.", particleSystem.checkForCollisions);
  preConditions.checkIfTrue(goldenhorse.setParticleSystemRotation, "particleSystem has a collidable particle. Cannot set rotation.", particleSystem.particlesWithCollisionCallbacks.size > 0);
  preConditions.checkIfTrue(goldenhorse.setParticleSystemRotation, "particleSystem has a trailed particle. Cannot set rotation.", particleSystem.hasTrailedParticle);
  preConditions.checkIfTrue(goldenhorse.setParticleSystemRotation, "particleSystem has a defined motion. Cannot set rotation.", (particleSystem.velocity.x != 0 || particleSystem.velocity.y != 0 || particleSystem.velocity.z != 0 || particleSystem.acceleration.x != 0 || particleSystem.acceleration.y != 0 || particleSystem.acceleration.z != 0));
  preConditions.checkIfParticleSystemInsideActiveScene(goldenhorse.setParticleSystemRotation, particleSystem);
  if (axis == this.axes.X){
    particleSystem.mesh.rotation.x = radians;
  }else if (axis == this.axes.Y){
    particleSystem.mesh.rotation.y = radians;
  }else if (axis == this.axes.Z){
    particleSystem.mesh.rotation.z = radians;
  }
  particleSystem.hasManualRotationSet = true;
}

//  Sets the quaternion of given particle system.
goldenhorse.prototype.setParticleSystemQuaternion = function(particleSystem, quatX, quatY, quatZ, quatW){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setParticleSystemQuaternion, preConditions.particleSystem, particleSystem);
  preConditions.checkIfParticleSystem(goldenhorse.setParticleSystemQuaternion, preConditions.particleSystem, particleSystem);
  preConditions.checkIfNumber(goldenhorse.setParticleSystemQuaternion, preConditions.quatX, quatX);
  preConditions.checkIfNumber(goldenhorse.setParticleSystemQuaternion, preConditions.quatY, quatY);
  preConditions.checkIfNumber(goldenhorse.setParticleSystemQuaternion, preConditions.quatZ, quatZ);
  preConditions.checkIfNumber(goldenhorse.setParticleSystemQuaternion, preConditions.quatW, quatW);
  preConditions.checkIfTrue(goldenhorse.setParticleSystemQuaternion, "particleSystem is not visible.", (!particleSystem.mesh.visible));
  preConditions.checkIfTrue(goldenhorse.setParticleSystemQuaternion, "particleSystem has a collision callback attached. Cannot set quaternion.", (particleSystem.checkForCollisions));
  preConditions.checkIfTrue(goldenhorse.setParticleSystemQuaternion, "particleSystem has a collidable particle. Cannot set quaternion.", (particleSystem.particlesWithCollisionCallbacks.size > 0));
  preConditions.checkIfTrue(goldenhorse.setParticleSystemQuaternion, "particleSystem has a trailed particle. Cannot set quaternion.", (particleSystem.hasTrailedParticle));
  preConditions.checkIfTrue(goldenhorse.setParticleSystemQuaternion, "particleSystem has a defined motion. Cannot set quaternion.", (particleSystem.velocity.x != 0 || particleSystem.velocity.y != 0 || particleSystem.velocity.z != 0 || particleSystem.acceleration.x != 0 || particleSystem.acceleration.y != 0 || particleSystem.acceleration.z != 0));
  preConditions.checkIfParticleSystemInsideActiveScene(goldenhorse.setParticleSystemQuaternion, particleSystem);
  particleSystem.mesh.quaternion.set(quatX, quatY, quatZ, quatW);
  particleSystem.hasManualQuaternionSet = true;
}

// Stops the motion of a particle system. This can be useful for smooth after collision
// effects of particle systems as it lets particles to dissapear smoothly. The particle
// system is killed after stopDuration seconds.
goldenhorse.prototype.stopParticleSystem = function(particleSystem, stopDuration){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.stopParticleSystem, preConditions.particleSystem, particleSystem);
  preConditions.checkIfParticleSystem(goldenhorse.stopParticleSystem, preConditions.particleSystem, particleSystem);
  preConditions.checkIfDefined(goldenhorse.stopParticleSystem, preConditions.stopDuration, stopDuration);
  preConditions.checkIfNumber(goldenhorse.stopParticleSystem, preConditions.stopDuration, stopDuration);
  preConditions.checkIfLessThanExclusive(goldenhorse.stopParticleSystem, preConditions.stopDuration, stopDuration, 0);
  preConditions.checkIfParticleSystemInsideActiveScene(goldenhorse.stopParticleSystem, particleSystem);
  particleSystem.stop(stopDuration);
}

// Starts a particle system after its creation. Configurations are:
// particleSystem: The particle system to start. (mandatory)
// startPosition: The initial position vector of the particle system. (optional)
// startVelocity: The initial velocity vector of the particle system. (optional)
// startAcceleration: The initial acceleration vector of the particle system. (optional)
// startQuaternion: The initial quaternion of the particle system. Use goldenhorse.computeQuaternionFromVectors (optional)
// maxCameraDistance: This parameter can be used for particle systems being shot from FPS weapons to visually
// adjust their scales. If set, the scale of the particle system is set to [distance_to_camera] / maxCameraDistance
// while the distance to camera is less than maxCameraDistance.
goldenhorse.prototype.startParticleSystem = function(configurations){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.startParticleSystem, preConditions.configurations, configurations);
  preConditions.checkIfMandatoryParameterExists(goldenhorse.startParticleSystem, preConditions.particleSystem, configurations.particleSystem);
  preConditions.checkIfParticleSystem(goldenhorse.startParticleSystem, preConditions.particleSystem, configurations.particleSystem);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.startParticleSystem, preConditions.startPosition, configurations.startPosition);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.startParticleSystem, preConditions.startVelocity, configurations.startVelocity);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.startParticleSystem, preConditions.startAcceleration, configurations.startAcceleration);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.startParticleSystem, preConditions.startQuaternion, configurations.startQuaternion);
  preConditions.checkIfParticleSystemInsideActiveScene(goldenhorse.startParticleSystem, configurations.particleSystem);
  configurations.particleSystem.start(configurations);
}

// Makes a particle system invisible.
goldenhorse.prototype.hideParticleSystem = function(particleSystem){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.hideParticleSystem, preConditions.particleSystem, particleSystem);
  preConditions.checkIfParticleSystem(goldenhorse.hideParticleSystem, preConditions.particleSystem, particleSystem);
  preConditions.checkIfParticleSystemInsideActiveScene(goldenhorse.hideParticleSystem, particleSystem);
  particleSystem.hide();
}

// Makes the particles of given particle system smaller on each frame. Greater
// the coefficient, faster the particles fade away. This can be used for
// smoke like particle systems to make them dissapear smoothly.
goldenhorse.prototype.fadeAway = function(particleSystem, coefficient){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.fadeAway, preConditions.particleSystem, particleSystem);
  preConditions.checkIfParticleSystem(goldenhorse.fadeAway, preConditions.particleSystem, particleSystem);
  preConditions.checkIfDefined(goldenhorse.fadeAway, preConditions.coefficient, coefficient);
  preConditions.checkIfNumber(goldenhorse.fadeAway, preConditions.coefficient, coefficient);
  preConditions.checkIfLessThan(goldenhorse.fadeAway, preConditions.coefficient, coefficient, 0);
  preConditions.checkIfParticleSystemInsideActiveScene(goldenhorse.fadeAway, particleSystem);
  if (!particleSystem.psMerger){
    particleSystem.material.uniforms.dissapearCoef.value = coefficient;
  }else{
    particleSystem.psMerger.material.uniforms.dissapearCoefArray.value[particleSystem.mergedIndex] = coefficient;
  }
}

// Sets the position of a particle system. This function is designed for
// magic circle like particle systems which may follow players. This function
// should not be used for particle systems with collision callbacks or particle systems
// with defined motions in general.
goldenhorse.prototype.setParticleSystemPosition = function(particleSystem, x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setParticleSystemPosition, preConditions.particleSystem, particleSystem);
  preConditions.checkIfParticleSystem(goldenhorse.setParticleSystemPosition, preConditions.particleSystem, particleSystem);
  preConditions.checkIfDefined(goldenhorse.setParticleSystemPosition, preConditions.x, x);
  preConditions.checkIfDefined(goldenhorse.setParticleSystemPosition, preConditions.y, y);
  preConditions.checkIfDefined(goldenhorse.setParticleSystemPosition, preConditions.z, z);
  preConditions.checkIfNumber(goldenhorse.setParticleSystemPosition, preConditions.x, x);
  preConditions.checkIfNumber(goldenhorse.setParticleSystemPosition, preConditions.y, y);
  preConditions.checkIfNumber(goldenhorse.setParticleSystemPosition, preConditions.z, z);
  preConditions.checkIfTrue(goldenhorse.setParticleSystemPosition, "particleSystem is not visible", (!particleSystem.mesh.visible));
  preConditions.checkIfTrue(goldenhorse.setParticleSystemPosition, "particleSystem has a collision callback attached.", particleSystem.checkForCollisions);
  preConditions.checkIfTrue(goldenhorse.setParticleSystemPosition, "particleSystem has collidable particles.", (particleSystem.particlesWithCollisionCallbacks.size > 0));
  preConditions.checkIfTrue(goldenhorse.setParticleSystemPosition, "particleSystem has a trailed particle.", particleSystem.hasTrailedParticle);
  preConditions.checkIfTrue(goldenhorse.setParticleSystemPosition, "particleSystem has a defined motion.", (particleSystem.velocity.x != 0 || particleSystem.velocity.y != 0 || particleSystem.velocity.z != 0 || particleSystem.acceleration.x != 0 || particleSystem.acceleration.y != 0 || particleSystem.acceleration.z != 0));
  preConditions.checkIfParticleSystemInsideActiveScene(goldenhorse.setParticleSystemPosition, particleSystem);
  particleSystem.mesh.position.set(x, y, z);
  particleSystem.hasManualPositionSet = true;
}

// Runs the provided function for each particle system of given particle system pool. The callbackFunction
// is executed with particleSystem and particleSystemName parameters.
goldenhorse.prototype.executeForEachParticleSystem = function(psPool, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.executeForEachParticleSystem, preConditions.psPool, psPool);
  preConditions.checkIfDefined(goldenhorse.executeForEachParticleSystem, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.executeForEachParticleSystem, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfParticleSystemPool(goldenhorse.executeForEachParticleSystem, preConditions.psPool, psPool);
  preConditions.checkIfParticleSystemPoolInsideActiveScene(goldenhorse.executeForEachParticleSystem, psPool);
  for (var psName in psPool.particleSystems){
    callbackFunction(psPool.particleSystems[psName], psName);
  }
}

// MOTION BLUR FUNCTIONS *******************************************************

// Starts the motion blur effect of an object.
goldenhorse.prototype.startMotionBlur = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.startMotionBlur, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.startMotionBlur, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.startMotionBlur, object);
  var objectTrail = objectTrails[object.name];
  preConditions.checkIfTrue(goldenhorse.startMotionBlur, "No effect attached to object.", (!objectTrail));
  objectTrail.start();
}

// Stops the motion blur effect of an object. The effect can be restarted using the startMotionBlur command.
goldenhorse.prototype.stopMotionBlur = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.stopMotionBlur, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.stopMotionBlur, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.stopMotionBlur, object);
  var objectTrail = objectTrails[object.name];
  preConditions.checkIfTrue(goldenhorse.stopMotionBlur, "No effect attached to object.", (!objectTrail));
  objectTrail.stop();
}

// CROSSHAIR FUNCTIONS *********************************************************

// Selects a crosshair. Only the selected crosshair is visible on the screen.
goldenhorse.prototype.selectCrosshair = function(crosshairName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.selectCrosshair, preConditions.crosshairName, crosshairName);
  var crosshair = crosshairs[crosshairName];
  preConditions.checkIfTrue(goldenhorse.selectCrosshair, "No such crosshair.", (!crosshair));
  preConditions.checkIfCrosshairInsideActiveScene(goldenhorse.selectCrosshair, crosshair);
  crosshairHandler.selectCrosshair(crosshair);
}

// Changes the color of the selected crosshair.
goldenhorse.prototype.changeCrosshairColor = function(colorName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.changeCrosshairColor, preConditions.colorName, colorName);
  preConditions.checkIfTrue(goldenhorse.changeCrosshairColor, "No crosshair is selected", (!selectedCrosshair));
  crosshairHandler.changeCrosshairColor(colorName);
}

// Destroys the selected crosshair. selectCrosshair function should be used after this function
// in order to put a crosshair on the screen.
goldenhorse.prototype.hideCrosshair = function(){
  if (mode == 0){
    return;
  }
  crosshairHandler.hideCrosshair();
}

// Starts rotation effect of the selected crosshair.
goldenhorse.prototype.startCrosshairRotation = function(angularSpeed){
  if (mode == 0){
    return;
  }
  preConditions.checkIfTrue(goldenhorse.startCrosshairRotation, "No selected crosshair", (!selectedCrosshair));
  preConditions.checkIfDefined(goldenhorse.startCrosshairRotation, preConditions.angularSpeed, angularSpeed);
  preConditions.checkIfNumber(goldenhorse.startCrosshairRotation, preConditions.angularSpeed, angularSpeed);
  crosshairHandler.startCrosshairRotation(angularSpeed);
}

// Stops rotation effect of the selected crosshair.
goldenhorse.prototype.stopCrosshairRotation = function(){
  if (mode == 0){
    return;
  }
  preConditions.checkIfTrue(goldenhorse.stopCrosshairRotation, "No selectedCrosshair.", (!selectedCrosshair));
  crosshairHandler.stopCrosshairRotation();
}

// Pauses rotation effect of the selected crosshair. startCrosshairRotation function
// can be used to continue the rotation effect.
goldenhorse.prototype.pauseCrosshairRotation = function(){
  if (mode == 0){
    return;
  }
  preConditions.checkIfTrue(goldenhorse.pauseCrosshairRotation, "No selectedCrosshair.", (!selectedCrosshair));
  crosshairHandler.pauseCrosshairRotation();
}

// Expands a crosshair. This can be used while shooting or walking for fps games.
// The crosshair expands by delta while its size is less than targetSize on each frame.
// This function is designed to be called inside onmousedown or onkeydown like events.
goldenhorse.prototype.expandCrosshair = function(targetSize, delta){
  if (mode == 0){
    return;
  }
  preConditions.checkIfTrue(goldenhorse.expandCrosshair, "No selectedCrosshair.", (!selectedCrosshair));
  preConditions.checkIfDefined(goldenhorse.expandCrosshair, preConditions.targetSize, targetSize);
  preConditions.checkIfNumber(goldenhorse.expandCrosshair, preConditions.targetSize, targetSize);
  preConditions.checkIfLessThan(goldenhorse.expandCrosshair, preConditions.targetSize, targetSize, selectedCrosshair.sizeAmount);
  preConditions.checkIfDefined(goldenhorse.expandCrosshair, preConditions.delta, delta);
  preConditions.checkIfNumber(goldenhorse.expandCrosshair, preConditions.delta, delta);
  preConditions.checkIfLessThan(goldenhorse.expandCrosshair, preConditions.delta, delta, 0);
  crosshairHandler.expandCrosshair(targetSize, delta);
}

// Shrinks a crosshair. This can be used after calling the expandCrosshair function.
// The crosshair shrinks by delta while its size is greater than its initial size. This function
// is designed to be called inside onmouseup or onkeyup like events.
goldenhorse.prototype.shrinkCrosshair = function(delta){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.shrinkCrosshair, preConditions.delta, delta);
  preConditions.checkIfNumber(goldenhorse.shrinkCrosshair, preConditions.delta, delta);
  preConditions.checkIfLessThan(goldenhorse.shrinkCrosshair, preConditions.delta, delta, 0);
  preConditions.checkIfTrue(goldenhorse.shrinkCrosshair, "No selected crosshair.", (!selectedCrosshair));
  crosshairHandler.shrinkCrosshair(delta);
}

// LISTENER FUNCTIONS **********************************************************

//  Sets a collision listener for an object, glued object or a particle system.
//  Callback function given as the second parameter is fired with a CollisionInfo instance when
//  the sourceObject is collided with other objects or glued objects of the scene.
//  The additional timeOffset parameter can be used for particle systems to
//  pre-calculate future collisions. This can help to prevent visual errors of collisions
//  of rather fast particle systems.
goldenhorse.prototype.setCollisionListener = function(sourceObject, callbackFunction, timeOffset){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setCollisionListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectObjectGroupParticleSystem(goldenhorse.setCollisionListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfDefined(goldenhorse.setCollisionListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setCollisionListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.setCollisionListener, preConditions.timeOffset, timeOffset);
  if ((sourceObject.isAddedObject) || (sourceObject.isObjectGroup)){
    preConditions.checkIfTrue(goldenhorse.setCollisionListener, "Cannot set collision listener for more than "+MAX_OBJECT_COLLISION_LISTENER_COUNT+" objects.", (TOTAL_OBJECT_COLLISION_LISTENER_COUNT >= MAX_OBJECT_COLLISION_LISTENER_COUNT));
    preConditions.checkIfTrue(goldenhorse.setCollisionListener, "Object used as FPS player body, cannot listen for collisions.", sourceObject.usedAsFPSPlayerBody);
    preConditions.checkIfObjectInsideActiveScene(goldenhorse.setCollisionListener, sourceObject);
    preConditions.checkIfNoMass(goldenhorse.setCollisionListener, preConditions.sourceObject, sourceObject);
    if (!collisionCallbackRequests.has(sourceObject.name)){
      TOTAL_OBJECT_COLLISION_LISTENER_COUNT ++;
    }
    sourceObject.setCollisionListener(callbackFunction);
  }else if (sourceObject.isParticleSystem){
    preConditions.checkIfTrue(goldenhorse.setCollisionListener, "Particle system is not marked as collidable.", (!sourceObject.isCollidable));
    preConditions.checkIfTrue(goldenhorse.setCollisionListener, "A position is set manually to the particle system. Cannot listen for collisions.", (sourceObject.hasManualPositionSet));
    preConditions.checkIfTrue(goldenhorse.setCollisionListener, "A rotation is set manually to the particle system. Cannot listen for collisions.", (sourceObject.hasManualRotationSet));
    preConditions.checkIfTrue(goldenhorse.setCollisionListener, "A quaternion is set manually to the particle system. Cannot listen for collisions.", (sourceObject.hasManualQuaternionSet));
    preConditions.checkIfParticleSystemInsideActiveScene(goldenhorse.setCollisionListener, sourceObject);
    var incrCounter = false;
    if (!particleSystemCollisionCallbackRequests[sourceObject.name]){
      incrCounter = true;
    }
    sourceObject.setCollisionListener(callbackFunction, timeOffset);
    if (incrCounter){
      TOTAL_PARTICLE_SYSTEM_COLLISION_LISTEN_COUNT ++;
    }
  }
}

//  Removes collision listeners of an object, glued object or a particle system.
goldenhorse.prototype.removeCollisionListener = function(sourceObject){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeCollisionListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectObjectGroupParticleSystemParticle(goldenhorse.removeCollisionListener, preConditions.sourceObject, sourceObject);
  var curCallbackRequest;
  if ((sourceObject.isAddedObject) || (sourceObject.isObjectGroup)){
    preConditions.checkIfObjectInsideActiveScene(goldenhorse.removeCollisionListener, sourceObject);
    curCallbackRequest = collisionCallbackRequests.get(sourceObject.name);
  }else if (sourceObject.isParticleSystem){
    preConditions.checkIfParticleSystemInsideActiveScene(goldenhorse.removeCollisionListener, sourceObject);
    curCallbackRequest = particleSystemCollisionCallbackRequests[sourceObject.name];
  }
  if (curCallbackRequest){
    if ((sourceObject.isAddedObject) || (sourceObject.isObjectGroup)){
      sourceObject.removeCollisionListener();
      TOTAL_OBJECT_COLLISION_LISTENER_COUNT --;
    }else if (sourceObject.isParticleSystem){
      TOTAL_PARTICLE_SYSTEM_COLLISION_LISTEN_COUNT --;
      sourceObject.removeCollisionListener();
    }
  }
}

// Sets an expiration listener for a particle system. The parameter callbackFunction
// is executed when sourceObject is expired. The name of the particle system is passed
// to the callbackFunction as a parameter.
goldenhorse.prototype.setExpireListener = function(sourceObject, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setExpireListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfParticleSystem(goldenhorse.setExpireListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfDefined(goldenhorse.setExpireListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setExpireListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfTrue(goldenhorse.setExpireListener, "sourceObject is already expired.", (sourceObject.destroyed));
  preConditions.checkIfParticleSystemInsideActiveScene(goldenhorse.setExpireListener, sourceObject);
  sourceObject.expirationFunction = callbackFunction;
}

// Removes the expiration listener function of a particle system.
goldenhorse.prototype.removeExpireListener = function(sourceObject){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeExpireListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfParticleSystem(goldenhorse.removeExpireListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfTrue(goldenhorse.removeExpireListener, "sourceObject is already expired", (sourceObject.destroyed));
  preConditions.checkIfParticleSystemInsideActiveScene(goldenhorse.removeExpireListener, sourceObject);
  delete sourceObject.expirationFunction;
}

// Sets a click listener for an object or an object group. The callbackFunction is executed
// with x, y, z coordinates of the clicked point. The callbackFunction is bound to object (this = object inside the function).
goldenhorse.prototype.setObjectClickListener = function(sourceObject, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setObjectClickListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfDefined(goldenhorse.setObjectClickListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setObjectClickListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfTrue(goldenhorse.setObjectClickListener, "sourceObject marked as unintersectable, cannot be clicked on.", (!sourceObject.isIntersectable));
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setObjectClickListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setObjectClickListener, sourceObject);
  sourceObject.clickCallbackFunction = callbackFunction;
  objectsWithOnClickListeners.set(sourceObject.name, sourceObject);
}

// Removes the click listener of an object or an object group.
goldenhorse.prototype.removeObjectClickListener = function(sourceObject){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeObjectClickListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.removeObjectClickListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfTrue(goldenhorse.removeObjectClickListener, "sourceObject is marked as unintersectable.", (!sourceObject.isIntersectable));
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.removeObjectClickListener, sourceObject);
  delete sourceObject.clickCallbackFunction;
  objectsWithOnClickListeners.delete(sourceObject.name);
}

// Sets a click listener for the screen. The callbackFunction is
// executed with x, y coordinates when clicked on the screen.
goldenhorse.prototype.setScreenClickListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setScreenClickListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setScreenClickListener, preConditions.callbackFunction, callbackFunction);
  screenClickCallbackFunction = callbackFunction;
}

// Removes the click listener of screen.
goldenhorse.prototype.removeScreenClickListener = function(){
  if (mode == 0){
    return;
  }
  screenClickCallbackFunction = noop;
}

// Sets a mouse down listener for screen. The callbackFunction is
// executed with x, y coordinates when mouse-downed on the screen.
goldenhorse.prototype.setScreenMouseDownListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setScreenMouseDownListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setScreenMouseDownListener, preConditions.callbackFunction, callbackFunction);
  screenMouseDownCallbackFunction = callbackFunction;
}

// Removes the mouse down listener of screen.
goldenhorse.prototype.removeScreenMouseDownListener = function(){
  if (mode == 0){
    return;
  }
  screenMouseDownCallbackFunction = noop;
}

// Sets mouse up listener for screen. The callbackFunction is
// executed with x, y coordinates when mouse-upped on the screen.
goldenhorse.prototype.setScreenMouseUpListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setScreenMouseUpListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setScreenMouseUpListener, preConditions.callbackFunction, callbackFunction);
  screenMouseUpCallbackFunction = callbackFunction;
}

// Removes mouse up listener for screen.
goldenhorse.prototype.removeScreenMouseUpListener = function(){
  if (mode == 0){
    return;
  }
  screenMouseUpCallbackFunction = noop;
}

// Sets mouse move listener for screen. The callbackFunction is
// executed with x, y coordinates and dX, dY values when mouse moves on the screen.
goldenhorse.prototype.setScreenMouseMoveListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setScreenMouseMoveListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setScreenMouseMoveListener, preConditions.callbackFunction, callbackFunction);
  screenMouseMoveCallbackFunction = callbackFunction;
}

// Removes mouse move listener for screen.
goldenhorse.prototype.removeScreenMouseMoveListener = function(){
  if (mode == 0){
    return;
  }
  screenMouseMoveCallbackFunction = noop;
}

// Sets a callback function for Pointer Lock API status changes. The callbackFunction
// is executed with isPointerLocked parameter.
goldenhorse.prototype.setScreenPointerLockChangeListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setScreenPointerLockChangeListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setScreenPointerLockChangeListener, preConditions.callbackFunction, callbackFunction);
  screenPointerLockChangedCallbackFunction = callbackFunction;
}

// Removes the Pointer Lock change listener for the screen.
goldenhorse.prototype.removeScreenPointerLockChangeListener = function(){
  if (mode == 0){
    return;
  }
  screenPointerLockChangedCallbackFunction = noop;
}

// Sets a listener for particle system pool consumption. The callbackFunction is
// executed wheren there is no available particle system left inside the pool.
goldenhorse.prototype.setParticleSystemPoolConsumedListener = function(psPool, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setParticleSystemPoolConsumedListener, preConditions.psPool, psPool);
  preConditions.checkIfParticleSystemPool(goldenhorse.setParticleSystemPoolConsumedListener, preConditions.psPool, psPool);
  preConditions.checkIfDefined(goldenhorse.setParticleSystemPoolConsumedListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setParticleSystemPoolConsumedListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfParticleSystemPoolInsideActiveScene(goldenhorse.setParticleSystemPoolConsumedListener, psPool);
  psPool.consumedCallback = callbackFunction;
}

// Removes the consumption listener of a particle system pool.
goldenhorse.prototype.removeParticleSystemPoolConsumedListener = function(psPool){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeParticleSystemPoolConsumedListener, preConditions.psPool, psPool);
  preConditions.checkIfParticleSystemPool(goldenhorse.removeParticleSystemPoolConsumedListener, preConditions.psPool, psPool);
  preConditions.checkIfParticleSystemPoolInsideActiveScene(goldenhorse.removeParticleSystemPoolConsumedListener, psPool);
  psPool.consumedCallback = noop;
}

// Sets an availability listener for a particle system pool. The callbackFunction is executed
// when there is at least one available particle system inside the pool again.
goldenhorse.prototype.setParticleSystemPoolAvailableListener = function(psPool, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setParticleSystemPoolAvailableListener, preConditions.psPool, psPool);
  preConditions.checkIfParticleSystemPool(goldenhorse.setParticleSystemPoolAvailableListener, preConditions.psPool, psPool);
  preConditions.checkIfDefined(goldenhorse.setParticleSystemPoolAvailableListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setParticleSystemPoolAvailableListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfParticleSystemPoolInsideActiveScene(goldenhorse.setParticleSystemPoolAvailableListener, psPool);
  psPool.availableCallback = callbackFunction;
}

// Removes the availablity listener for a particle system pool.
goldenhorse.prototype.removeParticleSystemPoolAvailableListener = function(psPool){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeParticleSystemPoolAvailableListener, preConditions.psPool, psPool);
  preConditions.checkIfParticleSystemPool(goldenhorse.removeParticleSystemPoolAvailableListener, preConditions.psPool, psPool);
  preConditions.checkIfParticleSystemPoolInsideActiveScene(goldenhorse.removeParticleSystemPoolAvailableListener, psPool);
  psPool.availableCallback = noop;
}

// Sets a callback function for fullscreen change API. The callbackFunction is executed
// with isFullScreenOn boolean parameter when the fullscreen status is changed.
goldenhorse.prototype.setFullScreenChangeCallbackFunction = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setFullScreenChangeCallbackFunction, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setFullScreenChangeCallbackFunction, preConditions.callbackFunction, callbackFunction);
  screenFullScreenChangeCallbackFunction = callbackFunction;
}

// Removes the fullscreen change listener.
goldenhorse.prototype.removeFullScreenChangeCallbackFunction = function(){
  if (mode == 0){
    return;
  }
  screenFullScreenChangeCallbackFunction = noop;
}

// Sets a callback function for FPS drops. The callbackFunction is executed
// with dropAmount parameter if the FPS is less than 60 for given second. The
// dropAmount is calculated using this formula: (60 - [current_fps])
goldenhorse.prototype.setFPSDropCallbackFunction = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setFPSDropCallbackFunction, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setFPSDropCallbackFunction, preConditions.callbackFunction, callbackFunction);
  fpsDropCallbackFunction = callbackFunction;
}

// Removes the callback function for FPS drops.
goldenhorse.prototype.removeFPSDropCallbackFunction = function(){
  if (mode == 0){
    return;
  }
  fpsDropCallbackFunction = noop;
}

// Sets a callback function for performance drops. The callbackFunction is executed
// if the FPS is under [minFPS] for [seconds] seconds. The callbackFunction is automatically
// removed after the execution, so use this function again if needed after the execution
// of the callbackFunction.
goldenhorse.prototype.setPerformanceDropCallbackFunction = function(minFPS, seconds, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setPerformanceDropCallbackFunction, preConditions.minFPS, minFPS);
  preConditions.checkIfNumber(goldenhorse.setPerformanceDropCallbackFunction, preConditions.minFPS, minFPS);
  preConditions.checkIfInRangeMinInclusive(goldenhorse.setPerformanceDropCallbackFunction, preConditions.minFPS, minFPS, 0, 60);
  preConditions.checkIfDefined(goldenhorse.setPerformanceDropCallbackFunction, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setPerformanceDropCallbackFunction, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfDefined(goldenhorse.setPerformanceDropCallbackFunction, preConditions.seconds, seconds);
  preConditions.checkIfNumber(goldenhorse.setPerformanceDropCallbackFunction, preConditions.seconds, seconds);
  preConditions.checkIfLessThan(goldenhorse.setPerformanceDropCallbackFunction, preConditions.seconds, seconds, 0);
  performanceDropCallbackFunction = callbackFunction;
  fpsHandler.initiatePerformanceDropMonitoring(minFPS, seconds);
}

// Removes the callback function for performance drops.
goldenhorse.prototype.removePerformanceDropCallbackFunction = function(){
  if (mode == 0){
    return;
  }
  performanceDropCallbackFunction = noop;
  fpsHandler.reset();
}

// Sets a callback function for user inactivity. The callbackFunction is executed
// if the user does not move or press the mouse or press a key for more than maxTimeInSeconds seconds.
// The callbackFunction is reset after the execution so use this function again to create a new
// inactivity listener.
goldenhorse.prototype.setUserInactivityCallbackFunction = function(maxTimeInSeconds, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setUserInactivityCallbackFunction, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setUserInactivityCallbackFunction, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfDefined(goldenhorse.setUserInactivityCallbackFunction, preConditions.maxTimeInSeconds, maxTimeInSeconds);
  preConditions.checkIfNumber(goldenhorse.setUserInactivityCallbackFunction, preConditions.maxTimeInSeconds, maxTimeInSeconds);
  preConditions.checkIfLessThan(goldenhorse.setUserInactivityCallbackFunction, preConditions.maxTimeInSeconds, maxTimeInSeconds, 0);
  inactiveCounter = 0;
  maxInactiveTime = maxTimeInSeconds;
  userInactivityCallbackFunction = callbackFunction;
}

// Removes the user inactivity callback function.
goldenhorse.prototype.removeUserInactivityCallbackFunction = function(){
  if (mode == 0){
    return;
  }
  inactiveCounter = 0;
  userInactivityCallbackFunction = noop;
  maxInactiveTime = 0;
}

// Sets a keydown listener. The callbackFunction is executed with the pressedChar
// parameter. See the values of keyCodeToChar variable for possible pressedChar
// parameters.
goldenhorse.prototype.setScreenKeydownListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setScreenKeydownListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setScreenKeydownListener, preConditions.callbackFunction, callbackFunction);
  screenKeydownCallbackFunction = callbackFunction;
}

// Removes the keydown listener.
goldenhorse.prototype.removeScreenKeydownListener = function(){
  if (mode == 0){
    return;
  }
  screenKeydownCallbackFunction = noop;
}

// Sets a keyup listener. The callbackFunction is executed with the uppedChar
// parameter. See the values of keyCodeToChar variable for possible uppedChar
// parameters.
goldenhorse.prototype.setScreenKeyupListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setScreenKeyupListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setScreenKeyupListener, preConditions.callbackFunction, callbackFunction);
  screenKeyupCallbackFunction = callbackFunction;
}

// Removes the keyup listener.
goldenhorse.prototype.removeScreenKeyupListener = function(){
  if (mode == 0){
    return;
  }
  screenKeyupCallbackFunction = noop;
}

// Sets a click listener for a text object. The callbackFunction is executed
// with textName parameter when the text object is clicked.
goldenhorse.prototype.onTextClick = function(text, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onTextClick, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.onTextClick, preConditions.text, text);
  preConditions.checkIfTextClickable(goldenhorse.onTextClick, preConditions.text, text);
  preConditions.checkIfDefined(goldenhorse.onTextClick, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onTextClick, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.onTextClick, text);
  text.clickCallbackFunction = callbackFunction;
  objectsWithOnClickListeners.set(text.name, text);
}

// Removes the click listener of a text object.
goldenhorse.prototype.removeTextClickListener = function(text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeTextClickListener, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.removeTextClickListener, preConditions.text, text);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.removeTextClickListener, text);
  text.clickCallbackFunction = noop;
  objectsWithOnClickListeners.delete(text.name);
}

// Sets a mouse wheel listener. The callbackFunction is executed with deltaX and deltaY parameters
// when a mousewheel event is triggered.
goldenhorse.prototype.setScreenMouseWheelListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setScreenMouseWheelListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setScreenMouseWheelListener, preConditions.callbackFunction, callbackFunction);
  screenMouseWheelCallbackFunction = callbackFunction;
}

// Removes the listener for mousewheel events.
goldenhorse.prototype.removeScreenMouseWheelListener = function(){
  if (mode == 0){
    return;
  }
  screenMouseWheelCallbackFunction = noop;
}

// For mobile devices, sets a pinch zoom gesture listener. The callbackFunction is executed with
// delta parameter that represents the variation of the distance between two fingers.
goldenhorse.prototype.setScreenPinchListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setScreenPinchListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setScreenPinchListener, preConditions.callbackFunction, callbackFunction);
  screenPinchCallbackFunction = callbackFunction;
}

// Removes the listener for pinch gesture.
goldenhorse.prototype.removeScreenPinchListener = function(){
  if (mode == 0){
    return;
  }
  screenPinchCallbackFunction = noop;
}

// Sets a mouseover listener for an object or an object group. The callbackFunction is executed
// with x, y, z coordinates of mouse. The callbackFunction is bound to object (this = object inside the function).
goldenhorse.prototype.setObjectMouseOverListener = function(sourceObject, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setObjectMouseOverListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfDefined(goldenhorse.setObjectMouseOverListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setObjectMouseOverListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfTrue(goldenhorse.setObjectMouseOverListener, "sourceObject marked as unintersectable, cannot be selected.", (!sourceObject.isIntersectable));
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setObjectMouseOverListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setObjectMouseOverListener, sourceObject);
  sourceObject.mouseOverCallbackFunction = callbackFunction;
  objectsWithMouseOverListeners.set(sourceObject.name, sourceObject);
}

// Removes the mouseover listener of an object or an object group.
goldenhorse.prototype.removeObjectMouseOverListener = function(sourceObject){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeObjectMouseOverListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.removeObjectMouseOverListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfTrue(goldenhorse.removeObjectMouseOverListener, "sourceObject is marked as unintersectable.", (!sourceObject.isIntersectable));
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.removeObjectMouseOverListener, sourceObject);
  delete sourceObject.mouseOverCallbackFunction;
  objectsWithMouseOverListeners.delete(sourceObject.name);
}

// Sets a mouseout listener for an object or an object group. The callbackFunction is bound to object
// (this = object inside the function).
goldenhorse.prototype.setObjectMouseOutListener = function(sourceObject, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setObjectMouseOutListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfDefined(goldenhorse.setObjectMouseOutListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setObjectMouseOutListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfTrue(goldenhorse.setObjectMouseOutListener, "sourceObject marked as unintersectable, cannot be selected.", (!sourceObject.isIntersectable));
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setObjectMouseOutListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setObjectMouseOutListener, sourceObject);
  sourceObject.mouseOutCallbackFunction = callbackFunction;
  objectsWithMouseOutListeners.set(sourceObject.name, sourceObject);
}

// Removes the mouseout listener of an object or an object group.
goldenhorse.prototype.removeObjectMouseOutListener = function(sourceObject){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeObjectMouseOutListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.removeObjectMouseOutListener, preConditions.sourceObject, sourceObject);
  preConditions.checkIfTrue(goldenhorse.removeObjectMouseOutListener, "sourceObject is marked as unintersectable.", (!sourceObject.isIntersectable));
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.removeObjectMouseOutListener, sourceObject);
  delete sourceObject.mouseOutCallbackFunction;
  objectsWithMouseOutListeners.delete(sourceObject.name);
}

// Sets a mouseover listener for a text. The callbackFunction is bound to text (this = text inside the function).
goldenhorse.prototype.onTextMouseOver = function(text, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onTextMouseOver, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.onTextMouseOver, preConditions.text, text);
  preConditions.checkIfTextClickable(goldenhorse.onTextMouseOver, preConditions.text, text);
  preConditions.checkIfDefined(goldenhorse.onTextMouseOver, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onTextMouseOver, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.onTextMouseOver, text);
  text.mouseOverCallbackFunction = callbackFunction;
  objectsWithMouseOverListeners.set(text.name, text);
}

// Removes the mouseover listener of a text.
goldenhorse.prototype.removeTextMouseOverListener = function(text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeTextMouseOverListener, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.removeTextMouseOverListener, preConditions.text, text);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.removeTextMouseOverListener, text);
  delete text.mouseOverCallbackFunction;
  objectsWithMouseOverListeners.delete(text.name);
}

// Sets a mouseout listener for a text. The callbackFunction is bound to text (this = text inside the function).
goldenhorse.prototype.onTextMouseOut = function(text, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onTextMouseOut, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.onTextMouseOut, preConditions.text, text);
  preConditions.checkIfTextClickable(goldenhorse.onTextMouseOut, preConditions.text, text);
  preConditions.checkIfDefined(goldenhorse.onTextMouseOut, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onTextMouseOut, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.onTextMouseOut, text);
  text.mouseOutCallbackFunction = callbackFunction;
  objectsWithMouseOutListeners.set(text.name, text);
}

// Removes the mouseout listener of a text.
goldenhorse.prototype.removeTextMouseOutListener = function(text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeTextMouseOutListener, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.removeTextMouseOutListener, preConditions.text, text);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.removeTextMouseOutListener, text);
  delete text.mouseOutCallbackFunction;
  objectsWithMouseOutListeners.delete(text.name);
}

// Sets a listener for an object detecting the position threshold passage for given axis. If controlMode = 1
// the callbackFunction is executed when object.position[axis] > threshold, if controlMode = 2 the callbackFunction
// is executed when object.position[axis] < threshold. The callbackFunction is bound to object (this = object inside the function)
// This API may be used to restart position of objects that went out of bounds of the scene by falling down etc.
goldenhorse.prototype.onObjectPositionThresholdExceeded = function(object, axis, threshold, controlMode, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onObjectPositionThresholdExceeded, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.onObjectPositionThresholdExceeded, preConditions.axis, axis);
  preConditions.checkIfDefined(goldenhorse.onObjectPositionThresholdExceeded, preConditions.threshold, threshold);
  preConditions.checkIfDefined(goldenhorse.onObjectPositionThresholdExceeded, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfDefined(goldenhorse.onObjectPositionThresholdExceeded, preConditions.controlMode, controlMode);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.onObjectPositionThresholdExceeded, preConditions.object, object);
  preConditions.checkIfChildObjectOnlyIfExists(goldenhorse.onObjectPositionThresholdExceeded, preConditions.object, object);
  preConditions.checkIfAxisOnlyIfDefined(goldenhorse.onObjectPositionThresholdExceeded, preConditions.axis, axis);
  preConditions.checkIfNumber(goldenhorse.onObjectPositionThresholdExceeded, preConditions.threshold, threshold);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onObjectPositionThresholdExceeded, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfTrue(goldenhorse.onObjectPositionThresholdExceeded, "controlMode must be 1 or 2", (controlMode != 1 && controlMode != 2));
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.onObjectPositionThresholdExceeded, object);
  object.setPositionThresholdExceededListener(axis, threshold, controlMode, callbackFunction);
}

// Removes the position threshold passage listener for an object. Does nothing
// if the object does not have such listener.
goldenhorse.prototype.removeObjectPositionThresholdExceededListener = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeObjectPositionThresholdExceededListener, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.removeObjectPositionThresholdExceededListener, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.removeObjectPositionThresholdExceededListener, object);
  if (object.positionThresholdExceededListenerInfo){
    object.positionThresholdExceededListenerInfo.isActive = false;
  }
}

// Sets a mouse drag listener for the screen. The callbackFunction is executed with x, y, movementX and movementY
// parameters.
goldenhorse.prototype.setScreenDragListener = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setScreenDragListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setScreenDragListener, preConditions.callbackFunction, callbackFunction);
  screenDragCallbackFunction = callbackFunction;
}

// Removes the screen drag listener.
goldenhorse.prototype.removeScreenDragListener = function(){
  if (mode == 0){
    return;
  }
  screenDragCallbackFunction = noop;
}

// Sets a listener for orientation change events. For mobile devices, the callbackFunction is executed with
// isLandscape parameter when the orientation is changed.
goldenhorse.prototype.setScreenOrientationChangeListener = function(callbackFunction){
  if (mode == 0 || (!isMobile && !mobileSimulation.isActive)){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setScreenOrientationChangeListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setScreenOrientationChangeListener, preConditions.callbackFunction, callbackFunction);
  screenOrientationChangeCallbackFunction = callbackFunction;
}

// Removes the listener for orientation change events.
goldenhorse.prototype.removeScreenOrientationChangeListener = function(){
  if (mode == 0 || (!isMobile && !mobileSimulation.isActive)){
    return;
  }
  screenOrientationChangeCallbackFunction = noop;
}

// Sets a finish listener for an animation of given object, object group, text, sprite, container or model instance.
// For repeating animations the callbackFunction is executed before each repeat.
// For rewinding animations the callbackFunction is executed when the rewind is finished.
goldenhorse.prototype.onAnimationFinished = function(object, animationName, callbackFunction){
  if (mode ==  0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onAnimationFinished, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.onAnimationFinished, preConditions.animationName, animationName);
  preConditions.checkIfDefined(goldenhorse.onAnimationFinished, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfAddedObjectObjectGroupAddedTextSpriteContainerModelInstance(goldenhorse.onAnimationFinished, preConditions.object, object);
  preConditions.checkIfAnimationExists(goldenhorse.onAnimationFinished, object, animationName);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onAnimationFinished, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.onAnimationFinished, object);
  object.animations[animationName].setFinishCallbackFunction(callbackFunction);
}

// Removes the finish listener for an animation of given object, object group, text, sprite, container or model instance.
goldenhorse.prototype.removeAnimationFinishListener = function(object, animationName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeAnimationFinishListener, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.removeAnimationFinishListener, preConditions.animationName, animationName);
  preConditions.checkIfAddedObjectObjectGroupAddedTextSpriteContainerModelInstance(goldenhorse.removeAnimationFinishListener, preConditions.object, object);
  preConditions.checkIfAnimationExists(goldenhorse.removeAnimationFinishListener, object, animationName);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.removeAnimationFinishListener, object);
  object.animations[animationName].finishCallbackFunction = noop;
}

// Executes the callbackFunction with exitedAreaName parameter when the camera enters
// into given area. The exitedAreaName is the name of the previous area
// that the camera was in.
goldenhorse.prototype.onAreaEnter = function(areaName, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onAreaEnter, preConditions.areaName, areaName);
  preConditions.checkIfDefined(goldenhorse.onAreaEnter, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfAreaExists(goldenhorse.onAreaEnter, areaName);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onAreaEnter, preConditions.callbackFunction, callbackFunction);
  areaEnterCallbacks[areaName] = callbackFunction;
}

// Executes the callbackFunction with enteredAreaName parameter when the camera exits
// from given area. The enteredAreaName is the name of the area that the
// camera entered into.
goldenhorse.prototype.onAreaExit = function(areaName, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onAreaExit, preConditions.areaName, areaName);
  preConditions.checkIfDefined(goldenhorse.onAreaExit, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfAreaExists(goldenhorse.onAreaExit, areaName);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onAreaExit, preConditions.callbackFunction, callbackFunction);
  areaExitCallbacks[areaName] = callbackFunction;
}

// Removes the area enter listener for given area name.
goldenhorse.prototype.removeAreaEnterListener = function(areaName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeAreaEnterListener, preConditions.areaName, areaName);
  preConditions.checkIfAreaExists(goldenhorse.removeAreaEnterListener, areaName);
  delete areaEnterCallbacks[areaName];
}

// Removes the area exit listener for given area name.
goldenhorse.prototype.removeAreaExitListener = function(areaName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeAreaExitListener, preConditions.areaName, areaName);
  preConditions.checkIfAreaExists(goldenhorse.removeAreaExitListener, areaName);
  delete areaExitCallbacks[areaName];
}

// Sets a sprite click listener. The callbackFunction is executed when the
// sprite is clicked.
goldenhorse.prototype.onSpriteClick = function(sprite, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onSpriteClick, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.onSpriteClick, preConditions.sprite, sprite);
  preConditions.checkIfSpriteClickable(goldenhorse.onSpriteClick, sprite);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.onSpriteClick, sprite);
  preConditions.checkIfDefined(goldenhorse.onSpriteClick, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onSpriteClick, preConditions.callbackFunction, callbackFunction);
  sprite.onClickCallback = callbackFunction;
  objectsWithOnClickListeners.set(sprite.name, sprite);
}

// Removes the click listener of a sprite object.
goldenhorse.prototype.removeSpriteClickListener = function(sprite){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeSpriteClickListener, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.removeSpriteClickListener, preConditions.sprite, sprite);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.removeSpriteClickListener, sprite);
  sprite.onClickCallback = noop;
  objectsWithOnClickListeners.delete(sprite.name);
}

// Sets a mouse over listener for a sprite.
goldenhorse.prototype.onSpriteMouseOver = function(sprite, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onSpriteMouseOver, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.onSpriteMouseOver, preConditions.sprite, sprite);
  preConditions.checkIfSpriteClickable(goldenhorse.onSpriteMouseOver, sprite);
  preConditions.checkIfDefined(goldenhorse.onSpriteMouseOver, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onSpriteMouseOver, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.onSpriteMouseOver, sprite);
  sprite.mouseOverCallbackFunction = callbackFunction;
  objectsWithMouseOverListeners.set(sprite.name, sprite);
}

// Removes the mouseover listener of a sprite.
goldenhorse.prototype.removeSpriteMouseOverListener = function(sprite){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeSpriteMouseOverListener, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.removeSpriteMouseOverListener, preConditions.sprite, sprite);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.removeSpriteMouseOverListener, sprite);
  delete sprite.mouseOverCallbackFunction;
  objectsWithMouseOverListeners.delete(sprite.name);
}

// Sets a mouseout listener for a sprite.
goldenhorse.prototype.onSpriteMouseOut = function(sprite, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onSpriteMouseOut, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.onSpriteMouseOut, preConditions.sprite, sprite);
  preConditions.checkIfSpriteClickable(goldenhorse.onSpriteMouseOut, sprite);
  preConditions.checkIfDefined(goldenhorse.onSpriteMouseOut, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onSpriteMouseOut, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.onSpriteMouseOut, sprite);
  sprite.mouseOutCallbackFunction = callbackFunction;
  objectsWithMouseOutListeners.set(sprite.name, sprite);
}

// Removes the mouseout listener of a sprite.
goldenhorse.prototype.removeSpriteMouseOutListener = function(sprite){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeSpriteMouseOutListener, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.removeSpriteMouseOutListener, preConditions.sprite, sprite);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.removeSpriteMouseOutListener, sprite);
  delete sprite.mouseOutCallbackFunction;
  objectsWithMouseOutListeners.delete(sprite.name);
}

// Sets a drag start listener for a sprite. The callbackFunction is executed
// with diffX and diffY parameters when a drag is initiated on a draggable sprite.
goldenhorse.prototype.onSpriteDragStart = function(sprite, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onSpriteDragStart, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.onSpriteDragStart, preConditions.sprite, sprite);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.onSpriteDragStart, sprite);
  preConditions.checkIfDefined(goldenhorse.onSpriteDragStart, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onSpriteDragStart, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfSpriteDraggable(goldenhorse.onSpriteDragStart, sprite);
  sprite.dragStartCallback = callbackFunction;
}

// Sets a drag stop listener for a sprite. The callbackFunction is executed
// when a user stops dragging a sprite (mouseup/touchend).
goldenhorse.prototype.onSpriteDragStop = function(sprite, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onSpriteDragStop, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.onSpriteDragStop, preConditions.sprite, sprite);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.onSpriteDragStop, sprite);
  preConditions.checkIfDefined(goldenhorse.onSpriteDragStop, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onSpriteDragStop, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfSpriteDraggable(goldenhorse.onSpriteDragStop, sprite);
  sprite.dragStopCallback = callbackFunction;
}

// Sets a dragging listener for a sprite. The callbackFunction is executed
// each time a sprite is relocated while being dragged.
goldenhorse.prototype.onSpriteDragging = function(sprite, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onSpriteDragging, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.onSpriteDragging, preConditions.sprite, sprite);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.onSpriteDragging, sprite);
  preConditions.checkIfDefined(goldenhorse.onSpriteDragging, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onSpriteDragging, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfSpriteDraggable(goldenhorse.onSpriteDragging, sprite);
  sprite.draggingCallback = callbackFunction;
}

// Removes the drag start listener of a sprite.
goldenhorse.prototype.removeSpriteDragStartListener = function(sprite){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeSpriteDragStartListener, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.removeSpriteDragStartListener, preConditions.sprite, sprite);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.removeSpriteDragStartListener, sprite);
  preConditions.checkIfSpriteDraggable(goldenhorse.removeSpriteDragStartListener, sprite);
  sprite.dragStartCallback = noop;
}

// Removes the drag stop listener of a sprite.
goldenhorse.prototype.removeSpriteDragStopListener = function(sprite){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeSpriteDragStopListener, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.removeSpriteDragStopListener, preConditions.sprite, sprite);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.removeSpriteDragStopListener, sprite);
  preConditions.checkIfSpriteDraggable(goldenhorse.removeSpriteDragStopListener, sprite);
  sprite.dragStopCallback = noop;
}

// Removes the dragging listener of a sprite.
goldenhorse.prototype.removeSpriteDraggingListener = function(sprite){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeSpriteDraggingListener, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.removeSpriteDraggingListener, preConditions.sprite, sprite);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.removeSpriteDraggingListener, sprite);
  preConditions.checkIfSpriteDraggable(goldenhorse.removeSpriteDraggingListener, sprite);
  sprite.draggingCallback = noop;
}

// Sets a click listener for a container. The callbackFunction is executed
// when the container is clicked.
goldenhorse.prototype.onContainerClick = function(container, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onContainerClick, preConditions.container, container);
  preConditions.checkIfDefined(goldenhorse.onContainerClick, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfContainer(goldenhorse.onContainerClick, container);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onContainerClick, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfContainerClickable(goldenhorse.onContainerClick, container);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.onContainerClick, container);
  container.onClickCallback = callbackFunction;
  objectsWithOnClickListeners.set(container.name, container);
}

// Removes the click listener of a container.
goldenhorse.prototype.removeContainerClickListener = function(container){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeContainerClickListener, preConditions.container, container);
  preConditions.checkIfContainer(goldenhorse.removeContainerClickListener, container);
  preConditions.checkIfContainerClickable(goldenhorse.removeContainerClickListener, container);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.removeContainerClickListener, container);
  container.onClickCallback = noop;
  objectsWithOnClickListeners.delete(container.name);
}

// Sets a mouse over listener for a container. The callbackFunction is executed
// when the mouse is moved over a container.
goldenhorse.prototype.onContainerMouseOver = function(container, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onContainerMouseOver, preConditions.container, container);
  preConditions.checkIfDefined(goldenhorse.onContainerMouseOver, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfContainer(goldenhorse.onContainerMouseOver, container);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onContainerMouseOver, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfContainerClickable(goldenhorse.onContainerMouseOver, container);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.onContainerMouseOver, container);
  container.mouseOverCallbackFunction = callbackFunction;
  objectsWithMouseOverListeners.set(container.name, container);
}

// Removes the mouse over listener for a container.
goldenhorse.prototype.removeContainerMouseOverListener = function(container){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeContainerMouseOverListener, preConditions.container, container);
  preConditions.checkIfContainer(goldenhorse.removeContainerMouseOverListener, container);
  preConditions.checkIfContainerClickable(goldenhorse.removeContainerMouseOverListener, container);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.removeContainerMouseOverListener, container);
  container.mouseOverCallbackFunction = noop;
  objectsWithMouseOverListeners.delete(container.name);
}

// Sets a mouse out listener for a container. The callbackFunction is executed
// when the mouse is moved out from a container.
goldenhorse.prototype.onContainerMouseOut = function(container, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onContainerMouseOut, preConditions.container, container);
  preConditions.checkIfDefined(goldenhorse.onContainerMouseOut, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfContainer(goldenhorse.onContainerMouseOut, container);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onContainerMouseOut, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfContainerClickable(goldenhorse.onContainerMouseOut, container);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.onContainerMouseOut, container);
  container.mouseOutCallbackFunction = callbackFunction;
  objectsWithMouseOutListeners.set(container.name, container);
}

// Removes the mouse out listener for a container.
goldenhorse.prototype.removeContainerMouseOutListener = function(container){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeContainerMouseOutListener, preConditions.container, container);
  preConditions.checkIfContainer(goldenhorse.removeContainerMouseOutListener, container);
  preConditions.checkIfContainerClickable(goldenhorse.removeContainerMouseOutListener, container);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.removeContainerMouseOutListener, container);
  container.mouseOutCallbackFunction = noop;
  objectsWithMouseOutListeners.delete(container.name);
}

// Sets a text change listener to a virtual keyboard. The callbackFunction is executed with
// newText parameter everytime a text of a virtual keyboard is changed.
goldenhorse.prototype.onVirtualKeyboardTextChange = function(virtualKeyboard, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onVirtualKeyboardTextChange, preConditions.virtualKeyboard, virtualKeyboard);
  preConditions.checkIfVirtualKeyboard(goldenhorse.onVirtualKeyboardTextChange, virtualKeyboard);
  preConditions.checkIfDefined(goldenhorse.onVirtualKeyboardTextChange, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onVirtualKeyboardTextChange, preConditions.callbackFunction, callbackFunction);
  virtualKeyboard.onTextChangeCallback = callbackFunction;
}

// Removes the text change listener from a virtual keyboard.
goldenhorse.prototype.removeVirtualKeyboardTextChangeListener = function(virtualKeyboard){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onVirtualKeyboardTextChange, preConditions.virtualKeyboard, virtualKeyboard);
  preConditions.checkIfVirtualKeyboard(goldenhorse.onVirtualKeyboardTextChange, virtualKeyboard);
  virtualKeyboard.onTextChangeCallback = noop;
}

// Sets a flush listener to a virtual keyboard. The callbackFunction is executed
// with flushedText parameter when the user presses on the OK button of a virtual keyboard.
goldenhorse.prototype.onVirtualKeyboardFlush = function(virtualKeyboard, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onVirtualKeyboardTextChange, preConditions.virtualKeyboard, virtualKeyboard);
  preConditions.checkIfVirtualKeyboard(goldenhorse.onVirtualKeyboardTextChange, virtualKeyboard);
  preConditions.checkIfDefined(goldenhorse.onVirtualKeyboardTextChange, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onVirtualKeyboardTextChange, preConditions.callbackFunction, callbackFunction);
  virtualKeyboard.onFlushCallback = callbackFunction;
}

// Removes the flush listener from a virtual keyboard.
goldenhorse.prototype.removeVirtualKeyboardFlushListener = function(virtualKeyboard){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onVirtualKeyboardTextChange, preConditions.virtualKeyboard, virtualKeyboard);
  preConditions.checkIfVirtualKeyboard(goldenhorse.onVirtualKeyboardTextChange, virtualKeyboard);
  virtualKeyboard.onFlushCallback = noop;
}

// Sets a location hash change listener. The callbackFunction is executed with
// the newHash parameter when the location hash changes.
goldenhorse.prototype.onLocationHashChange = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onLocationHashChange, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onLocationHashChange, preConditions.callbackFunction, callbackFunction);
  hashChangeCallbackFunction = callbackFunction;
}

// Removes the location hash change listener.
goldenhorse.prototype.removeLocationHashChangeListener = function(){
  if (mode == 0){
    return;
  }
  hashChangeCallbackFunction = noop;
}

// Sets a path finish listener for PathFollowingBehavior of given steerable object.
// The callbackFunction is executed when the path of given PathFollowingBehavior
// is consumed.
goldenhorse.prototype.setPathFinishListener = function(object, behaviorName, callbackFunction){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.setPathFinishListener, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.setPathFinishListener, preConditions.behaviorName, behaviorName);
  preConditions.checkIfDefined(goldenhorse.setPathFinishListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setPathFinishListener, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setPathFinishListener, object);
  preConditions.checkIfSteerable(goldenhorse.setPathFinishListener, object);
  preConditions.checkIfString(goldenhorse.setPathFinishListener, preConditions.behaviorName, behaviorName);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setPathFinishListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfObjectHasBehavior(goldenhorse.setPathFinishListener, object, behaviorName);
  preConditions.checkIfPathFollowingBehavior(goldenhorse.setPathFinishListener, object, behaviorName);

  steeringHandler.setPathFinishListener(object, behaviorName, callbackFunction);
}

// Removes a path finish listener for PathFollowingBehavior of given steerable object.
goldenhorse.prototype.removePathFinishListener = function(object, behaviorName){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.removePathFinishListener, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.removePathFinishListener, preConditions.behaviorName, behaviorName);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.removePathFinishListener, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.removePathFinishListener, object);
  preConditions.checkIfSteerable(goldenhorse.removePathFinishListener, object);
  preConditions.checkIfString(goldenhorse.removePathFinishListener, preConditions.behaviorName, behaviorName);
  preConditions.checkIfObjectHasBehavior(goldenhorse.removePathFinishListener, object, behaviorName);
  preConditions.checkIfPathFollowingBehavior(goldenhorse.removePathFinishListener, object, behaviorName);

  steeringHandler.removePathFinishListener(object, behaviorName);
}

// Sets a mouse move listener for given object. The callbackFunction is executed
// with x, y, z parameters every frame the mouse is on given object.
goldenhorse.prototype.setObjectMouseMoveListener = function(object, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setObjectMouseMoveListener, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.setObjectMouseMoveListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setObjectMouseMoveListener, preConditions.object, object);
  preConditions.checkIfTrue(goldenhorse.setObjectMouseMoveListener, "object marked as unintersectable, cannot be selected.", (!object.isIntersectable));
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setObjectMouseMoveListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setObjectMouseMoveListener, object);

  object.mouseMoveCallbackFunction = callbackFunction;
  objectsWithMouseMoveListeners.set(object.name, object);
}

// Removes the mouse move listener from given object.
goldenhorse.prototype.removeObjectMouseMoveListener = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeObjectMouseMoveListener, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.removeObjectMouseMoveListener, preConditions.object, object);
  preConditions.checkIfTrue(goldenhorse.removeObjectMouseMoveListener, "object marked as unintersectable, cannot be selected.", (!object.isIntersectable));
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.removeObjectMouseMoveListener, object);

  delete object.mouseMoveCallbackFunction;
  objectsWithMouseMoveListeners.delete(object.name);
}

// Sets a position change listener to given object or object group. The callbackFunction
// is executed with x, y, z coordinates everytime the position of the object changes.
goldenhorse.prototype.setPositionChangeListener = function(object, callbackFunction){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.setPositionChangeListener, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.setPositionChangeListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setPositionChangeListener, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setPositionChangeListener, object);
  preConditions.checkIfPositionChangeable(goldenhorse.setPositionChangeListener, object);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setPositionChangeListener, preConditions.callbackFunction, callbackFunction);

  object.positionChangeCallbackFunction = callbackFunction;
}

// Removes a position change listener from given object.
goldenhorse.prototype.removePositionChangeListener = function(object){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.removePositionChangeListener, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.removePositionChangeListener, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.removePositionChangeListener, object);
  preConditions.checkIfPositionChangeable(goldenhorse.removePositionChangeListener, object);

  object.positionChangeCallbackFunction = noop;
}

// Sets an exit callback function for given scene. The callback function is
// executed before the scene changes.
goldenhorse.prototype.onSceneExit = function(sceneName, callbackFunction){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.onSceneExit, preConditions.sceneName, sceneName);
  preConditions.checkIfDefined(goldenhorse.onSceneExit, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfSceneExists(goldenhorse.onSceneExit, sceneName);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onSceneExit, preConditions.callbackFunction, callbackFunction);

  sceneHandler.scenes[sceneName].beforeExitCallback = callbackFunction;
}

// Removes a scene exit listener for given scene.
goldenhorse.prototype.removeSceneExitListener = function(sceneName){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.removeSceneExitListener, preConditions.sceneName, sceneName);
  preConditions.checkIfSceneExists(goldenhorse.removeSceneExitListener, sceneName);

  sceneHandler.scenes[sceneName].beforeExitCallback = noop;
}

// Sets a state change listener for given state machine and given state. The callback
// function is executed without any parameters when the active state of given state machine
// is changed to given state.
goldenhorse.prototype.onStateEntry = function(stateMachine, stateName, callbackFunction){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.onStateEntry, preConditions.stateMachine, stateMachine);
  preConditions.checkIfDefined(goldenhorse.onStateEntry, preConditions.stateName, stateName);
  preConditions.checkIfDefined(goldenhorse.onStateEntry, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfStateMachine(goldenhorse.onStateEntry, stateMachine);
  preConditions.checkIfString(goldenhorse.onStateEntry, preConditions.stateName, stateName);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onStateEntry, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfStateMachineHasState(goldenhorse.onStateEntry, stateMachine, stateName);
  preConditions.checkIfStateMachineInActiveScene(goldenhorse.onStateEntry, stateMachine);

  decisionHandler.onStateEntry(stateMachine, stateName, callbackFunction);
}

// Removes a state entry listener for given state machine.
goldenhorse.prototype.removeStateEntryListener = function(stateMachine, stateName){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.removeStateEntryListener, preConditions.stateMachine, stateMachine);
  preConditions.checkIfDefined(goldenhorse.removeStateEntryListener, preConditions.stateName, stateName);
  preConditions.checkIfStateMachine(goldenhorse.removeStateEntryListener, stateMachine);
  preConditions.checkIfString(goldenhorse.removeStateEntryListener, preConditions.stateName, stateName);
  preConditions.checkIfStateMachineHasState(goldenhorse.removeStateEntryListener, stateMachine, stateName);
  preConditions.checkIfStateMachineInActiveScene(goldenhorse.removeStateEntryListener, stateMachine);

  decisionHandler.removeStateEntryListener(stateMachine, stateName);
}

// Executes the callback function with newScore parameter everytime the goldenhorse score
// of the project is updated. goldenhorse score represents the amount of consecutive
// seconds without a frame drop.
goldenhorse.prototype.ongoldenhorseScoreUpdated = function(callbackFunction){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.ongoldenhorseScoreUpdated, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.ongoldenhorseScoreUpdated, preConditions.callbackFunction, callbackFunction);

  goldenhorseScoreUpdateCallbackFunction = callbackFunction;
}

// Removes the goldenhorse score update listener set via ongoldenhorseScoreUpdated API.
goldenhorse.prototype.removegoldenhorseScoreUpdateListener = function(){
  if (mode == 0){
    return;
  }

  goldenhorseScoreUpdateCallbackFunction = noop;
}

// Sets a mouse over listener for given DOMElement.
goldenhorse.prototype.onDOMElementMouseOver = function(domElement, callbackFunction){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.onDOMElementMouseOver, preConditions.domElement, domElement);
  preConditions.checkIfDefined(goldenhorse.onDOMElementMouseOver, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfDOMElement(goldenhorse.onDOMElementMouseOver, domElement);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onDOMElementMouseOver, preConditions.callbackFunction, callbackFunction);

  domElement.mouseoverCallback = callbackFunction;
}

// Sets a mouse out listener for given DOMElement.
goldenhorse.prototype.onDOMElementMouseOut = function(domElement, callbackFunction){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.onDOMElementMouseOut, preConditions.domElement, domElement);
  preConditions.checkIfDefined(goldenhorse.onDOMElementMouseOut, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfDOMElement(goldenhorse.onDOMElementMouseOut, domElement);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onDOMElementMouseOut, preConditions.callbackFunction, callbackFunction);

  domElement.mouseoutCallback = callbackFunction;
}

// Sets a click listener for given DOMElement.
goldenhorse.prototype.onDOMElementClick = function(domElement, callbackFunction){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.onDOMElementClick, preConditions.domElement, domElement);
  preConditions.checkIfDefined(goldenhorse.onDOMElementClick, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfDOMElement(goldenhorse.onDOMElementClick, domElement);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onDOMElementClick, preConditions.callbackFunction, callbackFunction);

  domElement.clickCallback = callbackFunction;
}

// Removes a click listener from given DOMElement.
goldenhorse.prototype.removeDOMElementClickListener = function(domElement){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.removeDOMElementClickListener, preConditions.domElement, domElement);
  preConditions.checkIfDOMElement(goldenhorse.removeDOMElementClickListener, domElement);

  domElement.clickCallback = noop;
}

// Removes a mouse over listener from given DOMElement.
goldenhorse.prototype.removeDOMElementMouseOverListener = function(domElement){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.removeDOMElementMouseOverListener, preConditions.domElement, domElement);
  preConditions.checkIfDOMElement(goldenhorse.removeDOMElementMouseOverListener, domElement);

  domElement.mouseoverCallback = noop;
}

// Removes a mouse out listener from given DOMElement.
goldenhorse.prototype.removeDOMElementMouseOutListener = function(domElement){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.removeDOMElementMouseOutListener, preConditions.domElement, domElement);
  preConditions.checkIfDOMElement(goldenhorse.removeDOMElementMouseOutListener, domElement);

  domElement.mouseoutCallback = noop;
}

// Sets a click listener for a model instance. The callbackFunction is executed with x, y, z coordinates
// of the clicked point. The callbackFunction is bound to object (this = object inside the function).
goldenhorse.prototype.setModelInstanceClickListener = function(modelInstance, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setModelInstanceClickListener, preConditions.modelInstance, modelInstance);
  preConditions.checkIfDefined(goldenhorse.setModelInstanceClickListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfModelInstance(goldenhorse.setModelInstanceClickListener, modelInstance);
  preConditions.checkIfTrue(goldenhorse.setModelInstanceClickListener, "modelInstance marked as unintersectable, cannot be clicked on.", (!modelInstance.isIntersectable));
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.setModelInstanceClickListener, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfModelInstanceInActiveScene(goldenhorse.setModelInstanceClickListener, modelInstance);
  modelInstance.clickCallbackFunction = callbackFunction;
  modelInstancesWithClickListeners.set(modelInstance.name, modelInstance);
}

// Removes the click listener of a model instance.
goldenhorse.prototype.removeModelInstanceClickListener = function(modelInstance){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeModelInstanceClickListener, preConditions.modelInstance, modelInstance);
  preConditions.checkIfModelInstance(goldenhorse.removeModelInstanceClickListener, modelInstance);
  preConditions.checkIfTrue(goldenhorse.removeModelInstanceClickListener, "modelInstance is marked as unintersectable.", (!modelInstance.isIntersectable));
  preConditions.checkIfModelInstanceInActiveScene(goldenhorse.removeModelInstanceClickListener, modelInstance);
  delete modelInstance.clickCallbackFunction;
  modelInstancesWithClickListeners.delete(modelInstance.name);
}

// TEXT FUNCTIONS **************************************************************

// Sets a text to a text object.
goldenhorse.prototype.setText = function(textObject, text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setText, preConditions.textObject, textObject);
  preConditions.checkIfAddedText(goldenhorse.setText, preConditions.textObject, textObject);
  preConditions.checkIfDefined(goldenhorse.setText, preConditions.text, text);
  preConditions.checkIfString(goldenhorse.setText, preConditions.text, text);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.setText, textObject);
  textObject.setText(text, true);
  if (textObject.containerParent){
    textObject.containerParent.insertAddedText(textObject);
  }
}

// Sets the color of a text. colorName can be a color name like red or an hex string
// like #afef54.
goldenhorse.prototype.setTextColor = function(text, colorName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setTextColor, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.setTextColor, preConditions.text, text);
  preConditions.checkIfDefined(goldenhorse.setTextColor, preConditions.colorName, colorName);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.setTextColor, text);
  text.setColor(colorName, true);
}

// Sets the alpha of a text.
goldenhorse.prototype.setTextAlpha = function(text, alpha){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setTextAlpha, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.setTextAlpha, preConditions.text, text);
  preConditions.checkIfDefined(goldenhorse.setTextAlpha, preConditions.alpha, alpha);
  preConditions.checkIfNumber(goldenhorse.setTextAlpha, preConditions.alpha, alpha);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.setTextAlpha, text);
  text.setAlpha(alpha, true);
}

// Sets the position of a text object. If text is 2D only x and y parameters are
// necessary representing the marginX and marginY.
goldenhorse.prototype.setTextPosition = function(text, x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setTextPosition, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.setTextPosition, preConditions.text, text);
  preConditions.checkIfDefined(goldenhorse.setTextPosition, preConditions.x, x);
  preConditions.checkIfDefined(goldenhorse.setTextPosition, preConditions.y, y);
  preConditions.checkIfDefinedOnlyIfYTrue(goldenhorse.setTextPosition, "z is mandatory parameter for 3D texts.", !text.is2D, z);
  preConditions.checkIfNumber(goldenhorse.setTextPosition, preConditions.x, x);
  preConditions.checkIfNumber(goldenhorse.setTextPosition, preConditions.y, y);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.setTextPosition, preConditions.z, z);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.setTextPosition, text);
  preConditions.checkIfTextContained(goldenhorse.setTextPosition, text);
  text.setPosition(x, y, z);
}

// Sets the background color/alpha of a text object.
goldenhorse.prototype.setTextBackground = function(text, colorName, alpha){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setTextBackground, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.setTextBackground, preConditions.text, text);
  preConditions.checkIfTrue(goldenhorse.setTextBackground, "text has no background", (!text.hasBackground));
  preConditions.checkIfDefined(goldenhorse.setTextBackground, preConditions.colorName, colorName);
  preConditions.checkIfString(goldenhorse.setTextBackground, preConditions.colorName, colorName);
  preConditions.checkIfDefined(goldenhorse.setTextBackground, preConditions.alpha, alpha);
  preConditions.checkIfNumber(goldenhorse.setTextBackground, preConditions.alpha, alpha);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.setTextBackground, text);
  text.setBackground(colorName, alpha, true);
}

// Removes the background of a text object.
goldenhorse.prototype.removeTextBackground = function(text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeTextBackground, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.removeTextBackground, preConditions.text, text);
  preConditions.checkIfTrue(goldenhorse.setTextBackground, "text has no background", (!text.hasBackground));
  preConditions.checkIfTextInsideActiveScene(goldenhorse.setTextBackground, text);
  text.removeBackground(true);
}

// Puts the center of the given text object to given x, y, z coordinates.
goldenhorse.prototype.setTextCenterPosition = function(text, x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setTextCenterPosition, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.setTextCenterPosition, preConditions.text, text);
  preConditions.checkIfText2D(goldenhorse.setTextCenterPosition, preConditions.text, text);
  preConditions.checkIfDefined(goldenhorse.setTextCenterPosition, preConditions.x, x);
  preConditions.checkIfDefined(goldenhorse.setTextCenterPosition, preConditions.y, y);
  preConditions.checkIfDefined(goldenhorse.setTextCenterPosition, preConditions.z, z);
  preConditions.checkIfNumber(goldenhorse.setTextCenterPosition, preConditions.x, x);
  preConditions.checkIfNumber(goldenhorse.setTextCenterPosition, preConditions.y, y);
  preConditions.checkIfNumber(goldenhorse.setTextCenterPosition, preConditions.z, z);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.setTextCenterPosition, text);
  var centerPos = text.getCenterCoordinates();
  text.mesh.position.set(text.mesh.position.x + (x - centerPos.x), text.mesh.position.y + (y - centerPos.y), text.mesh.position.z + (z - centerPos.z));
}

// Makes the given text object invisible. Does nothing if the text is already
// invisible.
goldenhorse.prototype.hideText = function(text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.hideText, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.hideText, preConditions.text, text);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.hideText, text);
  if (text.mesh.visible){
    text.hide();
  }
}

// Makes the given text object visible. Does nothing if the text is already
// visible.
goldenhorse.prototype.showText = function(text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.showText, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.showText, preConditions.text, text);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.showText, text);
  if (!text.mesh.visible){
    text.show();
  }
}

// Activates the input mode for a 2D text. Does nothing if the text is already in
// input mode. The optional cursorSizePercent parameter can be used to adjust the
// cursor size (cursorSize = charSize * cursorSizePercent / 100)
goldenhorse.prototype.activateTextInputMode = function(text, cursorSizePercent){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.activateTextInputMode, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.activateTextInputMode, preConditions.text, text);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.activateTextInputMode, text);
  preConditions.checkIfText3D(goldenhorse.activateTextInputMode, preConditions.text, text);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.activateTextInputMode, preConditions.cursorSizePercent, cursorSizePercent);
  text.activateInputMode(cursorSizePercent);
}

// Deactivates the input mode for a 2D text. Does nothing if the text is already
// deactivated from input mode.
goldenhorse.prototype.deactivateTextInputMode = function(text){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.activateTextInputMode, preConditions.text, text);
  preConditions.checkIfAddedText(goldenhorse.activateTextInputMode, preConditions.text, text);
  preConditions.checkIfTextInsideActiveScene(goldenhorse.activateTextInputMode, text);
  preConditions.checkIfText3D(goldenhorse.activateTextInputMode, preConditions.text, text);
  text.deactivateInputMode();
}

// MODEL FUNCTIONS *************************************************************

// Maps given textures to a model instance. texturesObj is an object
// having:
// keys -> texture IDs of models instance
// values -> texture pack objects obtained via loadDynamicTextures API
// Textures IDs of a model instance may be obtained from the GUI by clicking
// on a model instance in the design mode and looking under the Textures folder.
goldenhorse.prototype.mapTexturesToModelInstance = function(modelInstance, texturesObj){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.mapTexturesToModelInstance, preConditions.modelInstance, modelInstance);
  preConditions.checkIfDefined(goldenhorse.mapTexturesToModelInstance, preConditions.texturesObj, texturesObj);
  preConditions.checkIfModelInstance(goldenhorse.mapTexturesToModelInstance, modelInstance);
  preConditions.checkIfCustomTexturesEnabled(goldenhorse.mapTexturesToModelInstance, modelInstance);
  preConditions.checkIfValidModelTextureSObj(goldenhorse.mapTexturesToModelInstance, modelInstance, texturesObj);
  preConditions.checkIfModelInstanceInActiveScene(goldenhorse.mapTexturesToModelInstance, modelInstance);
  modelInstance.mapCustomTextures(texturesObj);
  smartRenderingHandler.invalidate();
}

// Changes the material color of give child of a model instance. The color of all
// children are set if the childName parameter is set to null. Color values need
// to be in [0, 1] range.
goldenhorse.prototype.setModelInstanceColor = function(modelInstance, childName, colorR, colorG, colorB){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.setModelInstanceColor, preConditions.modelInstance, modelInstance);
  preConditions.checkIfDefinedNotNull(goldenhorse.setModelInstanceColor, preConditions.childName, childName);
  preConditions.checkIfDefined(goldenhorse.setModelInstanceColor, preConditions.colorR, colorR);
  preConditions.checkIfDefined(goldenhorse.setModelInstanceColor, preConditions.colorG, colorG);
  preConditions.checkIfDefined(goldenhorse.setModelInstanceColor, preConditions.colorB, colorB);
  preConditions.checkIfNumber(goldenhorse.setModelInstanceColor, preConditions.colorR, colorR);
  preConditions.checkIfNumber(goldenhorse.setModelInstanceColor, preConditions.colorG, colorG);
  preConditions.checkIfNumber(goldenhorse.setModelInstanceColor, preConditions.colorB, colorB);
  preConditions.checkIfModelInstanceHasChild(goldenhorse.setModelInstanceColor, modelInstance, childName);
  preConditions.checkIfModelInstanceInActiveScene(goldenhorse.setModelInstanceColor, modelInstance);

  var childIndex = null;
  if (childName != null){
    childIndex = modelInstance.getIndexByChildName(childName);
  }
  modelInstance.setColor(colorR, colorG, colorB, childIndex, true);
  smartRenderingHandler.invalidate();
}

// Sets texture transformation (offsetX, offsetY, repeatX and repeatY) properties for specified child
// of given model instance. Note that these values are used only if the model instance has a custom texture mapped.
goldenhorse.prototype.setModelInstanceTextureTransform = function(modelInstance, childName, offsetX, offsetY, repeatX, repeatY){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.setModelInstanceTextureTransform, preConditions.modelInstance, modelInstance);
  preConditions.checkIfDefined(goldenhorse.setModelInstanceTextureTransform, preConditions.childName, childName);
  preConditions.checkIfDefined(goldenhorse.setModelInstanceTextureTransform, preConditions.offsetX, offsetX);
  preConditions.checkIfDefined(goldenhorse.setModelInstanceTextureTransform, preConditions.offsetY, offsetY);
  preConditions.checkIfDefined(goldenhorse.setModelInstanceTextureTransform, preConditions.repeatX, repeatX);
  preConditions.checkIfDefined(goldenhorse.setModelInstanceTextureTransform, preConditions.repeatY, repeatY);
  preConditions.checkIfModelInstanceHasChild(goldenhorse.setModelInstanceTextureTransform, modelInstance, childName);
  preConditions.checkIfModelInstanceInActiveScene(goldenhorse.setModelInstanceTextureTransform, modelInstance);
  preConditions.checkIfNumber(goldenhorse.setModelInstanceTextureTransform, preConditions.offsetX, offsetX);
  preConditions.checkIfNumber(goldenhorse.setModelInstanceTextureTransform, preConditions.offsetY, offsetY);
  preConditions.checkIfNumber(goldenhorse.setModelInstanceTextureTransform, preConditions.repeatX, repeatX);
  preConditions.checkIfNumber(goldenhorse.setModelInstanceTextureTransform, preConditions.repeatY, repeatY);

  var childIndex = modelInstance.getIndexByChildName(childName);
  modelInstance.setTextureTransformForChild(childIndex, offsetX, offsetY, repeatX, repeatY);
  smartRenderingHandler.invalidate();
}

// Executes callbackFunction with childName parameter for each child of model instance.
goldenhorse.prototype.forEachChild = function(modelInstance, callbackFunction){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.forEachChild, preConditions.modelInstance, modelInstance);
  preConditions.checkIfDefined(goldenhorse.forEachChild, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfModelInstance(goldenhorse.forEachChild, modelInstance);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.forEachChild, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfModelInstanceInActiveScene(goldenhorse.forEachChild, modelInstance);

  for (var i = 0; i < modelInstance.model.info.childInfos.length; i ++){
    callbackFunction(modelInstance.model.info.childInfos[i].name);
  }
}

// CONTROL FUNCTIONS ***********************************************************

// Creates a new FreeControl implementation where the camera can freely move
// inside the scene for both desktop and mobile devices. The controls are:
// WSAD or ZQSD (French keyboard): Translate on plane XZ
// E - Space: Translate on axis Y
// Arrow keys or touch (mobile): Look around
// Finger pinch (mobile) - Mouse wheel (desktop): Translate on axis Z
// The configurations are:
// rotationYDelta (optional): Camera rotation amount for left-right keys. Default is 0.07.
// rotationXDelta (optional): Camera rotation amount for up-down keys. Default is 0.07.
// translateZAmount (optional): Translation amount on Z axis for WS or ZS keys or finger pinch events. Default is 3.
// translateXAmount (optional): Translation amount on X axis for DA or DQ keys. Default is 3.
// translateYAmount (optional): Translation amount on Y axis for E-Space keys. Default is 3.
// mouseWheelSpeed (optional): Translation speed for mousewheel zoom in/out. Default is 1.
// swipeSpeed (optional): Rotation speed for look with touch events on mobile. Default is 0.002.
// mouseDragSpeed (optional): Rotation speed for mouse drag events on desktop devices. Default is 15.
// requestFullScreen (optional): If true, fullscreen mode is requested automatically. Default is false.
goldenhorse.prototype.createFreeControl = function(parameters){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.createFreeControl, preConditions.parameters, parameters);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFreeControl, preConditions.rotationYDelta, parameters.rotationYDelta);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFreeControl, preConditions.rotationXDelta, parameters.rotationXDelta);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFreeControl, preConditions.translateZAmount, parameters.translateZAmount);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFreeControl, preConditions.translateXAmount, parameters.translateXAmount);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFreeControl, preConditions.translateYAmount, parameters.translateYAmount);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFreeControl, preConditions.mouseWheelSpeed, parameters.mouseWheelSpeed);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFreeControl, preConditions.swipeSpeed, parameters.swipeSpeed);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFreeControl, preConditions.mouseDragSpeed, parameters.mouseDragSpeed);
  preConditions.checkIfBooleanOnlyIfExists(goldenhorse.createFreeControl, preConditions.requestFullScreen, parameters.requestFullScreen);
  return new FreeControls(params);
}

// Creates a CustomControl implementation. This API may be used to create custom
// controls by filling the related event handlers. Parameters are:
// onClick (optional): Function to be executed with the click event when the user clicks. Default value is noop.
// onTap (optional): Function to be executed with the touch event when the user taps (mobile). Default value is noop.
// onSwipe (optional): Function to be executed with x, y, diffX and diffY parameters when the user moves their finger
// on the screen (mobile). Default value is noop.
// onPinch (optional): Function to be executed with diff parameter when the user performs a pinch zoom (mobile).
// Default value is noop.
// onMouseWheel (optional): Function to be executed with the mouse wheel event when the user performs a mouse wheel.
// Default value is noop.
// onMouseMove (optional): Function to be executed with the mouse move event when the user performs a mouse move.
// Default value is noop.
// onMouseDown (optional): Function to be executed with the mouse down event when the user performs a mouse down.
// Default vaue is noop.
// onMouseUp (optional): Function to be executed with the mouse up event when the user performs a mouse up. Default
// value is noop.
// onTouchStart (optional): Function to be executed with the TouchEvent when the user performs a touch start. Default
// value is noop.
// onTouchMove (optional): Function to be executed with the TouchEvent when the user performs a touch move. Default
// value is noop.
// onTouchEnd (optional): Function to be executed with the TouchEvent when the user performs a touch end. Default
// value is noop.
// onKeyDown (optional): Function to be executed with the key down event when the user performs a key down. Default
// value is noop.
// onKeyUp (optional): Function to be executed with the key up event when the user performs a key up. Default
// value is noop.
// onResize (optional): Function to be executed when the screen is resized. Default value is noop.
// onFullScreenChange (optional): Function to be executed with the isFullScreen parameter when the
// fullscreen status of the screen is changed. Default value is noop.
// onDrag (optional): Function to be executed with x, y, movementX, movementY parameters when the user performs
// a moue drag operation. Default value is noop.
// onUpdate (optional): Function to be executed on each frame. Default value is noop.
goldenhorse.prototype.createCustomControl = function(parameters){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.createCustomControl, preConditions.parameters, parameters);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onClick, parameters.onClick);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onTap, parameters.onTap);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onSwipe, parameters.onSwipe);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onPinch, parameters.onPinch);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onMouseWheel, parameters.onMouseWheel);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onMouseMove, parameters.onMouseMove);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onMouseDown, parameters.onMouseDown);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onMouseUp, parameters.onMouseUp);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onTouchStart, parameters.onTouchStart);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onTouchMove, parameters.onTouchMove);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onTouchEnd, parameters.onTouchEnd);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onUpdate, parameters.onUpdate);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onKeyDown, parameters.onKeyDown);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onResize, parameters.onResize);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onFullScreenChange, parameters.onFullScreenChange);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onKeyUp, parameters.onKeyUp);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createCustomControl, preConditions.onDrag, parameters.onDrag);
  return new CustomControls(parameters);
}

// Sets the active control.
goldenhorse.prototype.setActiveControl = function(control){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setActiveControl, preConditions.control, control);
  preConditions.checkIfTrue(goldenhorse.setActiveControl, "control is not a Control object.", !control.isControl);
  var callOnActivated = false;
  if (activeControl !== control){
    callOnActivated = true;
    activeControl.onDeactivated();
  }
  activeControl = control;
  if (callOnActivated){
    control.onActivated();
  }
}

// Creates a new FPSControls object to be used in First Person Shooter games for
// both desktop and mobile devices. FPSControls automatically handles the PointerLock
// as well. The controls are:
// For desktop:
// WSAD/ZQSD (French keyboard) / Arrow Keys: Move
// Mouse: Look
// Click: Shoot
// Space: Jump
// For mobile:
// Left side of the screen: Move
// Right side of the screen: Look around
// Tap on the right side of the screen: Jump
// For mobile devices controls are automatically paused for portrait orientation.
// Configurations are:
// playerBodyObject (mandatory): A dummy sphere type object to physically represent the player.
// The camera is placed on the center of the playerBodyObject. The playerBodyObject is graphically hidden
// when the FPSControls object is activated, shown again when deactivated. The playerBodyObject must be a
// dynamic object (mass > 0) and must be marked as changeable in order to be used by FPSControls class.
// initialPosition (mandatory): The initial position of playerBodyObject.
// mouseSpeed (optional): The speed of mouse based camera look-around event. Default value is 0.002.
// touchLookSpeed (optional): The speed of touch based camera look*around event. Default value is 0.01.
// speed (optional): The speed of motion. Default value is 200.
// jumpSpeed (optional): The jump speed. Default value is 500.
// touchJoystickThreshold (optional): For the left hand move controls on mobile devices, this
// parameter is used in order to filter out negligible TouchEvents on finger move, thus preventing
// flickering moves. The TouchEvents are filtered if the length between the previous and the current
// (pageX, pageY) is less than or equals to touchJoystickThreshold. Default value is 1.5.
// crosshairName (optional): The name of the Crosshair.
// crosshairExpandSize (optional): The target size of the crosshair in order to be used for expand animation
// when the player is moving or shooting. Default value is 9.
// crosshairAnimationDelta (optional): The delta value of the crosshair expand animation. Default value is 0.2.
// hasDoubleJump (optional): If true, the user may double jump by pressing Space or tapping twice. Default value is true.
// doubleJumpTimeThresholdInMs (optional): This parameter define the max time in milliseconds between two Space key hits or
// taps in order to perform a double jump. Default value is 500.
// weaponObject1 (optional): The first weapon object. This might be any object or object group marked as FPS Weapon.
// weaponObject2 (optional): The second weapon object. This might be any object or object group marked as FPS Weapon.
// hasIdleGunAnimation (optional): If true weapon objects are animated in order to give the FPS controls a realistic
// feeling. Default value is true.
// idleGunAnimationSpeed (optional): The speed of the idle gun animation. Default value is 0.05.
// weaponRotationRandomnessOn (optional): If true the weapons rotate a bit more than the camera in order to
// give the FPS view more realistic view. Default value is true.
// onLook (optional): A callback function executed each frame with x, y, z and objName parameters
// representing the intersected object from the FPS camera. If there is no intersected object
// the objName is set to null. Default value is noop.
// onShoot (optional): A callback function executed with x, y, z and objName parameters representing the intersected
// object from the FPS camera while the mouse is down for Desktop devices. For mobile devices due to lack of mouse device
// this function is executed when the camera is looking at one of the shootable objects defined with the shootableObjects
// parameter in order to help implementing the auto-shoot functionality. Default value is noop.
// onStoppedShooting (optional): A callback function executed without any parameter when the mouse is not down
// for the first time after it was down.
// shootableObjects (optional): An array of objects representing the objects that can be shot. This parameter is
// used inside the onShoot event for mobile devices in order to decide if the object being looked at should
// trigger the onShoot function or not. Default value is an empty array.
// onPause (optional): A callback function to be executed when the FPS controls are paused on mobile devices
// due to switching to Portrait orientation. Default value is noop.
// onResume (optional): A callback function to be executed on mobile devices when the FPS controls are resumed
// after switching back to the Landscape orientation. Default value is noop.
// requestFullScreen (optional): If true the FullScreen mode is requested if the screen is not on full screen. FPS Controls
// API also automatically re-requests the FullScreen mode every time after the user cancels the FullScreen. Default value
// is false.
// yOffset (optional): The offset value between the camera Y coordinate and the player body object Y coordinate. This may
// be used in order to place the camera below or above the player body object. Default value is 0.
// onUpdate (optional): Function to be executed on each frame. Default value is noop.
goldenhorse.prototype.createFPSControl = function(parameters){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.createFPSControl, preConditions.parameters, parameters);
  preConditions.checkIfDefined(goldenhorse.createFPSControl, preConditions.playerBodyObject, parameters.playerBodyObject);
  preConditions.checkIfAddedObject(goldenhorse.createFPSControl, preConditions.playerBodyObject, parameters.playerBodyObject);
  preConditions.checkIfSphere(goldenhorse.createFPSControl, preConditions.playerBodyObject, parameters.playerBodyObject);
  preConditions.checkIfDynamic(goldenhorse.createFPSControl, preConditions.playerBodyObject, parameters.playerBodyObject);
  preConditions.checkIfChangeable(goldenhorse.createFPSControl, preConditions.playerBodyObject, parameters.playerBodyObject);
  preConditions.checkIfDefined(goldenhorse.createFPSControl, preConditions.initialPosition, parameters.initialPosition);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.createFPSControl, preConditions.initialPosition, parameters.initialPosition);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFPSControl, preConditions.mouseSpeed, parameters.mouseSpeed);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFPSControl, preConditions.touchLookSpeed, parameters.touchLookSpeed);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFPSControl, preConditions.speed, parameters.speed);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFPSControl, preConditions.jumpSpeed, parameters.jumpSpeed);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFPSControl, preConditions.touchJoystickThreshold, parameters.touchJoystickThreshold);
  preConditions.checkIfTrueOnlyIfYExists(goldenhorse.createFPSControl, "No such crosshair.", parameters.crosshairName, !crosshairs[parameters.crosshairName]);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFPSControl, preConditions.crosshairExpandSize, parameters.crosshairExpandSize);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFPSControl, preConditions.crosshairAnimationDelta, parameters.crosshairAnimationDelta);
  preConditions.checkIfBooleanOnlyIfExists(goldenhorse.createFPSControl, preConditions.hasDoubleJump, parameters.hasDoubleJump);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFPSControl, preConditions.doubleJumpTimeThresholdInMs, parameters.doubleJumpTimeThresholdInMs);
  preConditions.checkIfAddedObjectOrObjectGroupOnlyIfExists(goldenhorse.createFPSControl, preConditions.weaponObject1, parameters.weaponObject1);
  preConditions.checkIfFPSWeaponOnlyIfExists(goldenhorse.createFPSControl, preConditions.weaponObject1, parameters.weaponObject1);
  preConditions.checkIfAddedObjectOrObjectGroupOnlyIfExists(goldenhorse.createFPSControl, preConditions.weaponObject2, parameters.weaponObject2);
  preConditions.checkIfFPSWeaponOnlyIfExists(goldenhorse.createFPSControl, preConditions.weaponObject2, parameters.weaponObject2);
  preConditions.checkIfBooleanOnlyIfExists(goldenhorse.createFPSControl, preConditions.hasIdleGunAnimation, parameters.hasIdleGunAnimation);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFPSControl, preConditions.idleGunAnimationSpeed, parameters.idleGunAnimationSpeed);
  preConditions.checkIfBooleanOnlyIfExists(goldenhorse.createFPSControl, preConditions.weaponRotationRandomnessOn, parameters.weaponRotationRandomnessOn);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createFPSControl, preConditions.onLook, parameters.onLook);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createFPSControl, preConditions.onShoot, parameters.onShoot);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createFPSControl, preConditions.onStoppedShooting, parameters.onStoppedShooting);
  preConditions.checkIfArrayOnlyIfExists(goldenhorse.createFPSControl, preConditions.shootableObjects, parameters.shootableObjects);
  preConditions.checkIfArrayOfObjectsOnlyIfExists(goldenhorse.createFPSControl, preConditions.shootableObjects, parameters.shootableObjects);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createFPSControl, preConditions.onPause, parameters.onPause);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createFPSControl, preConditions.onResume, parameters.onResume);
  preConditions.checkIfBooleanOnlyIfExists(goldenhorse.createFPSControl, preConditions.requestFullScreen, parameters.requestFullScreen);
  preConditions.checkIfTrueOnlyIfYAndZExists(goldenhorse.createFPSControl, "Weapon objects are the same.", parameters.weaponObject1, parameters.weaponObject2, (parameters.weaponObject1 == parameters.weaponObject2));
  preConditions.checkIfAlreadyUsedAsFPSWeaponOnlyIfExists(goldenhorse.createFPSControl, preConditions.weaponObject1, parameters.weaponObject1);
  preConditions.checkIfAlreadyUsedAsFPSWeaponOnlyIfExists(goldenhorse.createFPSControl, preConditions.weaponObject2, parameters.weaponObject2);
  preConditions.checkIfTrue(goldenhorse.createFPSControl, "Player body object cannot have set colllision listener.", collisionCallbackRequests.has(parameters.playerBodyObject.name));
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.createFPSControl, parameters.playerBodyObject);
  preConditions.checkIfObjectInsideActiveSceneOnlyIfExists(goldenhorse.createFPSControl, parameters.weaponObject1);
  preConditions.checkIfObjectInsideActiveSceneOnlyIfExists(goldenhorse.createFPSControl, parameters.weaponObject2);
  preConditions.checkIfCrosshairInsideActiveSceneOnlyIfNameExists(goldenhorse.createFPSControl, parameters.crosshairName);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createFPSControl, preConditions.yOffset, parameters.yOffset);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createFPSControl, preConditions.onUpdate, parameters.onUpdate);
  return new FPSControls(parameters);
}

// Creates a new OrbitControl object. Using the OrbitControl, camera can orbit
// around a specified point by looking at it on each frame. Camera can move freely
// around the surface of an imaginary sphere. Controls are:
// For desktop:
// Mouse wheel/Mouse drag: Rotate
// Right/Left/D/A/Q: Rotate
// Mouse wheel/Up/Down/W/S/Z: Zoom in/out
// Space: Zoom in/out
// For mobile:
// Finger pinch zoom: Zoom in/out
// Finger touch: Rotate
// Configurations are:
// lookPosition (optional): A vector defining the look position and the center of the imaginary sphere. Default value is (0, 0, 0).
// maxRadius (optional): The maximum radius of the imaginary sphere that the camera can zoom out to. Default
// value is 150.
// minRadius (optional): The minimum radius of the imaginary sphere that the camera can zoom in to. Default
// value is 50.
// initialRadius (optional): The initial radius of the imaginary sphere. Default value is the value of maxRadius.
// initialTheta (optional): The initial theta angle of the imaginary sphere. Default value is Math.PI/4.
// initialPhi (optional): The initial phi angle of the imaginary sphere. Default value is Math.PI/4.
// zoomDelta (optional): The difference of radius when the user performs a zoom in/out. Default value is 1.
// mouseWheelRotationSpeed (optional): The speed of mouse wheel rotation. Default value is 3.
// mouseWheelZoomSpeed (optional): The speed of mouse wheel zoom. Default value is 3.
// mouseDragRotationSpeed (optional): The speed of mouse drag rotation. Default value is 20.
// fingerSwipeRotationSpeed (optional): The speed of finger touch rotation for mobile devices. Default value is 20.
// keyboardRotationSpeed (optional): The speed of rotation using keyboard events. Default value is 10.
// requestFullScreen (optional): If true the FullScreen mode is requested if the screen is not on full screen. Orbit Controls
// API also automatically re-requests the FullScreen mode every time after the user cancels the FullScreen. Default value
// is false.
// onUpdate (optional): A function that is executed on each frame (optional).
// multiPivotModelInstance (optional): A ModelInstance, allowing users to change the pivot point on double click.
goldenhorse.prototype.createOrbitControl = function(parameters){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.createOrbitControl, preConditions.parameters, parameters);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.createOrbitControl, preConditions.lookPosition, parameters.lookPosition);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createOrbitControl, preConditions.maxRadius, parameters.maxRadius);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createOrbitControl, preConditions.minRadius, parameters.minRadius);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createOrbitControl, preConditions.zoomDelta, parameters.zoomDelta);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createOrbitControl, preConditions.mouseWheelRotationSpeed, parameters.mouseWheelRotationSpeed);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createOrbitControl, preConditions.mouseDragRotationSpeed, parameters.mouseDragRotationSpeed);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createOrbitControl, preConditions.fingerSwipeRotationSpeed, parameters.fingerSwipeRotationSpeed);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createOrbitControl, preConditions.keyboardRotationSpeed, parameters.keyboardRotationSpeed);
  preConditions.checkIfBooleanOnlyIfExists(goldenhorse.createOrbitControl, preConditions.requestFullScreen, parameters.requestFullScreen);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createOrbitControl, preConditions.initialRadius, parameters.initialRadius);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createOrbitControl, preConditions.mouseWheelZoomSpeed, parameters.mouseWheelZoomSpeed);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createOrbitControl, preConditions.initialPhi, parameters.initialPhi);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createOrbitControl, preConditions.initialTheta, parameters.initialTheta);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createOrbitControl, preConditions.onUpdate, parameters.onUpdate);
  preConditions.checkIfModelInstanceOnlyIfExists(goldenhorse.createOrbitControl, parameters.multiPivotModelInstance);
  preConditions.checkIfModelInstanceInActiveSceneOnlyIfExists(goldenhorse.createOrbitControl, parameters.multiPivotModelInstance);
  preConditions.checkIfTrue(goldenhorse.createOrbitControl, "multiPivotModelInstance marked as unintersectable, cannot be clicked on.", (parameters.multiPivotModelInstance && !parameters.multiPivotModelInstance.isIntersectable));
  return new OrbitControls(parameters);
}

// Creates a new PathFollowingControl object. In this control, camera automatically
// follows a given array of marked points while allowing users to view around via
// mouse move or touch swipe. Note that this API automatically requests pointer lock.
// Configurations are:
// markedPointNames (mandatory): An array of marked point names defining a path.
// interpolationSpeed (optional): A number between 0 and 1 indicating the camera speed. Default value is 0.001.
// restart (optional): A boolean value indicating whether the movement should restart when the path is consumed. Default value is false.
// onFinished (optional): A callback function executed when the path is consumed. Note that this function is not executed if restart parameter is on.
// mouseSpeed (optional): The mouse speed for desktop devices. Default value is 0.002.
// swipeSpeed (optional): The touch swipe speed for mobile devices. Default value is 0.002.
goldenhorse.prototype.createPathFollowingControl = function(parameters){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.createPathFollowingControl, preConditions.parameters, parameters);
  preConditions.checkIfDefined(goldenhorse.createPathFollowingControl, preConditions.markedPointNames, parameters.markedPointNames);
  preConditions.checkIfArrayOfStrings(goldenhorse.createPathFollowingControl, preConditions.markedPointNames, parameters.markedPointNames);
  preConditions.checkIfArrayOfMarkedPointNamesInScene(goldenhorse.createPathFollowingControl, parameters.markedPointNames);
  preConditions.checkIfArrayLengthGreaterThan(goldenhorse.createPathFollowingControl, preConditions.markedPointNames, parameters.markedPointNames, 1);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createPathFollowingControl, preConditions.interpolationSpeed, parameters.interpolationSpeed);
  preConditions.checkIfInRangeMinInclusiveOnlyIfExists(goldenhorse.createPathFollowingControl, preConditions.interpolationSpeed, parameters.interpolationSpeed, 0, 1);
  preConditions.checkIfBooleanOnlyIfExists(goldenhorse.createPathFollowingControl, preConditions.restart, parameters.restart);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.createPathFollowingControl, preConditions.onFinished, parameters.onFinished);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createPathFollowingControl, preConditions.mouseSpeed, parameters.mouseSpeed);
  preConditions.checkIfLessThanOnlyIfExists(goldenhorse.createPathFollowingControl, preConditions.mouseSpeed, parameters.mouseSpeed, 0);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createPathFollowingControl, preConditions.swipeSpeed, parameters.swipeSpeed);
  preConditions.checkIfLessThanOnlyIfExists(goldenhorse.createPathFollowingControl, preConditions.swipeSpeed, parameters.swipeSpeed, 0);

  return new PathFollowingControls(parameters);
}

// ANIMATION FUNCTIONS *********************************************************

// Starts an animation of given object, object group, text, sprite, container or model instance.
goldenhorse.prototype.startAnimation = function(object, animationName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.startAnimation, preConditions.object, object);
  preConditions.checkIfAddedObjectObjectGroupAddedTextSpriteContainerModelInstance(goldenhorse.startAnimation, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.startAnimation, preConditions.animationName, animationName);
  preConditions.checkIfAnimationExists(goldenhorse.startAnimation, object, animationName);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.startAnimation, object);
  var animation = object.animations[animationName];
  animationHandler.forceFinish(animation);
  animationHandler.startAnimation(animation);
}

// Stops an animation of given object, object group, text, sprite, container or model instance.
goldenhorse.prototype.stopAnimation = function(object, animationName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.stopAnimation, preConditions.object, object);
  preConditions.checkIfAddedObjectObjectGroupAddedTextSpriteContainerModelInstance(goldenhorse.stopAnimation, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.stopAnimation, preConditions.animationName, animationName);
  preConditions.checkIfAnimationExists(goldenhorse.stopAnimation, object, animationName);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.stopAnimation, object);
  var animation = object.animations[animationName];
  animationHandler.forceFinish(animation);
}

// Makes an animation freeze on finish. This can be used for certain weapon
// animations where the weapon starts shooting after going to a certain position/rotation.
// Use unfreezeAnimation API to undo this. Note that this function should be used
// after starting an animation.
goldenhorse.prototype.freezeAnimationOnFinish = function(object, animationName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.freezeAnimationOnFinish, preConditions.object, object);
  preConditions.checkIfAddedObjectObjectGroupAddedTextSpriteContainerModelInstance(goldenhorse.freezeAnimationOnFinish, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.freezeAnimationOnFinish, preConditions.animationName, animationName);
  preConditions.checkIfAnimationExists(goldenhorse.freezeAnimationOnFinish, object, animationName);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.freezeAnimationOnFinish, object);
  var animation = object.animations[animationName];
  animationHandler.freezeOnFinish(animation);
}

// Unfreezes an animation started with freezeOnFinish parameter set to true.
goldenhorse.prototype.unfreezeAnimation = function(object, animationName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.unfreezeAnimation, preConditions.object, object);
  preConditions.checkIfAddedObjectObjectGroupAddedTextSpriteContainerModelInstance(goldenhorse.unfreezeAnimation, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.unfreezeAnimation, preConditions.animationName, animationName);
  preConditions.checkIfAnimationExists(goldenhorse.unfreezeAnimation, object, animationName);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.unfreezeAnimation, object);
  var animation = object.animations[animationName];
  animationHandler.unfreeze(animation);
}

// Sets the state of an animation to ANIMATION_STATE_RUNNING for animations
// that are in ANIMATION_STATE_REWINDING state.
goldenhorse.prototype.cancelAnimationRewind = function(object, animationName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.cancelAnimationRewind, preConditions.object, object);
  preConditions.checkIfAddedObjectObjectGroupAddedTextSpriteContainerModelInstance(goldenhorse.cancelAnimationRewind, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.cancelAnimationRewind, preConditions.animationName, animationName);
  preConditions.checkIfAnimationExists(goldenhorse.cancelAnimationRewind, object, animationName);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.cancelAnimationRewind, object);
  animationHandler.cancelRewind(object.animations[animationName]);
}

// Sets the state of an animation to ANIMATION_STATE_REWINDING for animations
// that are in ANIMATION_STATE_RUNNING state. For animations in ANIMATION_STATE_FROZEN
// state, use unfreezeAnimation API instead of this.
goldenhorse.prototype.rewindAnimation = function(object, animationName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.rewindAnimation, preConditions.object, object);
  preConditions.checkIfAddedObjectObjectGroupAddedTextSpriteContainerModelInstance(goldenhorse.rewindAnimation, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.rewindAnimation, preConditions.animationName, animationName);
  preConditions.checkIfAnimationExists(goldenhorse.rewindAnimation, object, animationName);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.rewindAnimation, object);
  animationHandler.forceRewind(object.animations[animationName]);
}

// Starts all animations of given object, object group, text, sprite, container or model instance.
goldenhorse.prototype.startAllAnimations = function(object) {
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.startAllAnimations, preConditions.object, object);
  preConditions.checkIfAddedObjectObjectGroupAddedTextSpriteContainerModelInstance(goldenhorse.startAllAnimations, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.startAllAnimations, object);
  animationHandler.startAllAnimations(object);
}

// MUZZLEFLASH FUNCTIONS *******************************************************

// Shows a muzzle flash. This function may be called each time a FPS weapon
// is shooting. The optional animationTimeInMS parameter can be used to
// start the muzzle flash with a scale animation. This can be useful for
// flame-like muzzle flashes.
goldenhorse.prototype.showMuzzleFlash = function(muzzleflashName, animationTimeInMS){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.showMuzzleFlash, preConditions.muzzleflashName, muzzleflashName);
  var muzzleFlash = muzzleFlashes[muzzleflashName];
  preConditions.checkIfMuzzleFlashExists(goldenhorse.showMuzzleFlash, muzzleFlash);
  preConditions.checkIfMuzzleFlashAttached(goldenhorse.showMuzzleFlash, muzzleFlash);
  preConditions.checkIfMuzzleFlashActivated(goldenhorse.showMuzzleFlash, muzzleFlash);
  preConditions.checkIfMuzzleFlashInsideActiveScene(goldenhorse.showMuzzleFlash, muzzleFlash);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.showMuzzleFlash, preConditions.animationTimeInMS, animationTimeInMS);
  muzzleFlash.onShow(animationTimeInMS);
}

// Hides a muzzle flash. This function may be called inside onStoppedShooting callback
// of a FPS control. The optional animationTimeInMS parameter can be used to
// hide the muzzle flash with a scale animation. This can be useful for
// flame-like muzzle flashes.
goldenhorse.prototype.hideMuzzleFlash = function(muzzleflashName, animationTimeInMS){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.hideMuzzleFlash, preConditions.muzzleflashName, muzzleflashName);
  var muzzleFlash = muzzleFlashes[muzzleflashName];
  preConditions.checkIfMuzzleFlashExists(goldenhorse.hideMuzzleFlash, muzzleFlash);
  preConditions.checkIfMuzzleFlashAttached(goldenhorse.hideMuzzleFlash, muzzleFlash);
  preConditions.checkIfMuzzleFlashActivated(goldenhorse.hideMuzzleFlash, muzzleFlash);
  preConditions.checkIfMuzzleFlashInsideActiveScene(goldenhorse.hideMuzzleFlash, muzzleFlash);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.hideMuzzleFlash, preConditions.animationTimeInMS, animationTimeInMS);
  muzzleFlash.onHide(animationTimeInMS);
}

// LIGHTING FUNCTIONS **********************************************************

// Updates the strength of a dynamic light.
goldenhorse.prototype.updateLightStrength = function(light, newStrength){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.updateLightStrength, preConditions.light, light);
  preConditions.checkIfDefined(goldenhorse.updateLightStrength, preConditions.newStrength, newStrength);
  preConditions.checkIfNumber(goldenhorse.updateLightStrength, preConditions.newStrength, newStrength);
  preConditions.checkIfDynamicLight(goldenhorse.updateLightStrength, light);
  preConditions.checkIfLightInActiveScene(goldenhorse.updateLightStrength, light);
  preConditions.checkIfLightSuitableForStrengthUpdate(goldenhorse.updateLightStrength, light);
  light.dynamicInfo.strength = newStrength;
  lightHandler.updateDynamicLight(light);
}

// Updates the color of a dynamic light.
goldenhorse.prototype.updateLightColor = function(light, newR, newG, newB){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.updateLightColor, preConditions.light, light);
  preConditions.checkIfDefined(goldenhorse.updateLightColor, preConditions.newR, newR);
  preConditions.checkIfDefined(goldenhorse.updateLightColor, preConditions.newG, newG);
  preConditions.checkIfDefined(goldenhorse.updateLightColor, preConditions.newB, newB);
  preConditions.checkIfNumber(goldenhorse.updateLightColor, preConditions.newR, newR);
  preConditions.checkIfNumber(goldenhorse.updateLightColor, preConditions.newG, newG);
  preConditions.checkIfNumber(goldenhorse.updateLightColor, preConditions.newB, newB);
  preConditions.checkIfDynamicLight(goldenhorse.updateLightColor, light);
  preConditions.checkIfLightInActiveScene(goldenhorse.updateLightColor, light);
  preConditions.checkIfLightSuitableForColorUpdate(goldenhorse.updateLightColor, light);
  light.dynamicInfo.colorR = newR;
  light.dynamicInfo.colorG = newG;
  light.dynamicInfo.colorB = newB;
  lightHandler.updateDynamicLight(light);
}

// Updates the direction of a dynamic light.
goldenhorse.prototype.updateLightDirection = function(light, newDirX, newDirY, newDirZ){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.updateLightDirection, preConditions.light, light);
  preConditions.checkIfDefined(goldenhorse.updateLightDirection, preConditions.newDirX, newDirX);
  preConditions.checkIfDefined(goldenhorse.updateLightDirection, preConditions.newDirY, newDirY);
  preConditions.checkIfDefined(goldenhorse.updateLightDirection, preConditions.newDirZ, newDirZ);
  preConditions.checkIfNumber(goldenhorse.updateLightDirection, preConditions.newDirX, newDirX);
  preConditions.checkIfNumber(goldenhorse.updateLightDirection, preConditions.newDirY, newDirY);
  preConditions.checkIfNumber(goldenhorse.updateLightDirection, preConditions.newDirZ, newDirZ);
  preConditions.checkIfDynamicLight(goldenhorse.updateLightDirection, light);
  preConditions.checkIfLightInActiveScene(goldenhorse.updateLightDirection, light);
  preConditions.checkIfLightSuitableForDirectionUpdate(goldenhorse.updateLightDirection, light);
  light.dynamicInfo.dirX = newDirX;
  light.dynamicInfo.dirY = newDirY;
  light.dynamicInfo.dirZ = newDirZ;
  lightHandler.updateDynamicLight(light);
}

// Updates the position of a dynamic light.
goldenhorse.prototype.updateLightPosition = function(light, newPosX, newPosY, newPosZ){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.updateLightPosition, preConditions.light, light);
  preConditions.checkIfDefined(goldenhorse.updateLightPosition, preConditions.newPosX, newPosX);
  preConditions.checkIfDefined(goldenhorse.updateLightPosition, preConditions.newPosY, newPosY);
  preConditions.checkIfDefined(goldenhorse.updateLightPosition, preConditions.newPosZ, newPosZ);
  preConditions.checkIfNumber(goldenhorse.updateLightPosition, preConditions.newPosX, newPosX);
  preConditions.checkIfNumber(goldenhorse.updateLightPosition, preConditions.newPosY, newPosY);
  preConditions.checkIfNumber(goldenhorse.updateLightPosition, preConditions.newPosZ, newPosZ);
  preConditions.checkIfDynamicLight(goldenhorse.updateLightPosition, light);
  preConditions.checkIfLightInActiveScene(goldenhorse.updateLightPosition, light);
  preConditions.checkIfLightSuitableForPositionUpdate(goldenhorse.updateLightPosition, light);
  light.dynamicInfo.positionX = newPosX;
  light.dynamicInfo.positionY = newPosY;
  light.dynamicInfo.positionZ = newPosZ;
  lightHandler.updateDynamicLight(light);
}

// Places a point light into the position of given object each frame.
goldenhorse.prototype.attachPointLightToObject = function(object, light){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.attachPointLightToObject, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.attachPointLightToObject, preConditions.light, light);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.attachPointLightToObject, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.attachPointLightToObject, object);
  preConditions.checkIfObjectMoveable(goldenhorse.attachPointLightToObject, object);
  preConditions.checkIfDynamicLight(goldenhorse.attachPointLightToObject, light);
  preConditions.checkIfLightInActiveScene(goldenhorse.attachPointLightToObject, light);
  preConditions.checkIfLightSuitableForPositionUpdate(goldenhorse.attachPointLightToObject, light);

  lightHandler.attachLightToObject(light, object);
}

// LIGHTNING FUNCTIONS *********************************************************

// Starts a lightning. Does nothing if the lightning is already started.
goldenhorse.prototype.startLightning = function(lightning){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.startLightning, preConditions.lightning, lightning);
  preConditions.checkIfLightning(goldenhorse.startLightning, lightning);
  preConditions.checkIfLightningInsideActiveScene(goldenhorse.startLightning, lightning);
  preConditions.checkIfLightningStartable(goldenhorse.startLightning, lightning);
  lightning.start();
}

// Sets the start point of a lightning.
goldenhorse.prototype.setLightningStartPoint = function(lightning, position){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setLightningStartPoint, preConditions.lightning, lightning);
  preConditions.checkIfDefined(goldenhorse.setLightningStartPoint, preConditions.position, position);
  preConditions.checkIfLightning(goldenhorse.setLightningStartPoint, lightning);
  preConditions.checkIfLightningInsideActiveScene(goldenhorse.setLightningStartPoint, lightning);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.setLightningStartPoint, preConditions.position, position);
  preConditions.checkIfTrue(goldenhorse.setLightningStartPoint, "Lightning is attached to a FPS weapon, cannot set start point.", lightning.attachedToFPSWeapon);
  lightning.startPoint.set(position.x, position.y, position.z);
}

// Sets the end point of a lightning.
goldenhorse.prototype.setLightningEndPoint = function(lightning, position){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setLightningEndPoint, preConditions.lightning, lightning);
  preConditions.checkIfDefined(goldenhorse.setLightningEndPoint, preConditions.position, position);
  preConditions.checkIfLightning(goldenhorse.setLightningEndPoint, lightning);
  preConditions.checkIfLightningInsideActiveScene(goldenhorse.setLightningEndPoint, lightning);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.setLightningEndPoint, preConditions.position, position);
  lightning.endPoint.set(position.x, position.y, position.z);
}

// Stops a lightning. Does nothing if the lightning is already stopped.
goldenhorse.prototype.stopLightning = function(lightning){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.stopLightning, preConditions.lightning, lightning);
  preConditions.checkIfLightning(goldenhorse.stopLightning, lightning);
  preConditions.checkIfLightningInsideActiveScene(goldenhorse.stopLightning, lightning);
  lightning.stop();
}

// SPRITE FUNCTIONS ************************************************************

// Returns if two sprites are intersected.
goldenhorse.prototype.areSpritesIntersected = function(sprite1, sprite2){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.areSpritesIntersected, preConditions.sprite1, sprite1);
  preConditions.checkIfDefined(goldenhorse.areSpritesIntersected, preConditions.sprite2, sprite2);
  preConditions.checkIfSprite(goldenhorse.areSpritesIntersected, preConditions.sprite1, sprite1);
  preConditions.checkIfSprite(goldenhorse.areSpritesIntersected, preConditions.sprite2, sprite2);
  return sprite1.intersectionTest(sprite2);
}

// Sets the color of a sprite.
goldenhorse.prototype.setSpriteColor = function(sprite, colorName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setSpriteColor, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.setSpriteColor, preConditions.sprite, sprite);
  preConditions.checkIfDefined(goldenhorse.setSpriteColor, preConditions.colorName, colorName);
  preConditions.checkIfString(goldenhorse.setSpriteColor, preConditions.colorName, colorName);
  sprite.setColor(colorName);
}

// Sets the alpha of a sprite.
goldenhorse.prototype.setSpriteAlpha = function(sprite, alpha){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setSpriteAlpha, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.setSpriteAlpha, preConditions.sprite, sprite);
  preConditions.checkIfDefined(goldenhorse.setSpriteAlpha, preConditions.alpha, alpha);
  preConditions.checkIfNumber(goldenhorse.setSpriteAlpha, preConditions.alpha, alpha);
  sprite.setAlpha(alpha);
}

// Hides a sprite. Does nothing if the sprite is already hidden.
goldenhorse.prototype.hideSprite = function(sprite){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.hideSprite, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.hideSprite, preConditions.sprite, sprite);
  sprite.hide();
}

// Shows a sprite. Does nothing if the sprite is already visible.
goldenhorse.prototype.showSprite = function(sprite){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.showSprite, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.showSprite, preConditions.sprite, sprite);
  sprite.show();
}

// Sets the margin of a sprite.
goldenhorse.prototype.setSpriteMargin = function(sprite, marginPercentX, marginPercentY){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setSpriteMargin, preConditions.sprite, sprite);
  preConditions.checkIfDefined(goldenhorse.setSpriteMargin, preConditions.marginPercentX, marginPercentX);
  preConditions.checkIfDefined(goldenhorse.setSpriteMargin, preConditions.marginPercentY, marginPercentY);
  preConditions.checkIfSprite(goldenhorse.setSpriteMargin, preConditions.sprite, sprite);
  preConditions.checkIfNumber(goldenhorse.setSpriteMargin, preConditions.marginPercentX, marginPercentX);
  preConditions.checkIfNumber(goldenhorse.setSpriteMargin, preConditions.marginPercentY, marginPercentY);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.setSpriteMargin, sprite);
  preConditions.checkIfSpriteContained(goldenhorse.setSpriteMargin, sprite);
  sprite.set2DCoordinates(marginPercentX, marginPercentY);
}

// Sets the rotation of a sprite. Angle is expected to be between [0, 360].
goldenhorse.prototype.setSpriteRotationAngle = function(sprite, angle){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setSpriteRotationAngle, preConditions.sprite, sprite);
  preConditions.checkIfDefined(goldenhorse.setSpriteRotationAngle, preConditions.angle, angle);
  preConditions.checkIfSprite(goldenhorse.setSpriteRotationAngle, preConditions.sprite, sprite);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.setSpriteRotationAngle, sprite);
  preConditions.checkIfNumber(goldenhorse.setSpriteRotationAngle, preConditions.angle, angle);
  preConditions.checkIfSpriteContained(goldenhorse.setSpriteRotationAngle, sprite);
  sprite.setRotation(angle);
}

// Enables dragging for draggable sprites. Dragging is initially enabled
// for draggable sprites.
goldenhorse.prototype.enableSpriteDragging = function(sprite){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.enableSpriteDragging, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.enableSpriteDragging, preConditions.sprite, sprite);
  preConditions.checkIfSpriteDraggable(goldenhorse.enableSpriteDragging, sprite);
  sprite.draggingDisabled = false;
}

// Disables dragging for draggable sprites. Dragging is initially enabled
// for draggable sprites.
goldenhorse.prototype.disableSpriteDragging = function(sprite){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.disableSpriteDragging, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.disableSpriteDragging, preConditions.sprite, sprite);
  preConditions.checkIfSpriteDraggable(goldenhorse.disableSpriteDragging, sprite);
  sprite.draggingDisabled = true;
}

// Maps a texture pack to given sprite. The texturePackOrName parameter
// can be the name of a tetxure pack or the texture pack itself if loaded
// with loadDynamicTextures API.
goldenhorse.prototype.mapTextureToSprite = function(sprite, texturePackOrName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.mapTextureToSprite, preConditions.sprite, sprite);
  preConditions.checkIfDefined(goldenhorse.mapTextureToSprite, preConditions.texturePackOrName, texturePackOrName);
  preConditions.checkIfSprite(goldenhorse.disableSpriteDragging, preConditions.sprite, sprite);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.disableSpriteDragging, sprite);
  if (texturePackOrName.isTexturePack){
    sprite.mapTexture(texturePackOrName);
  }else{
    preConditions.checkIfTexturePackExists(goldenhorse.disableSpriteDragging, texturePackOrName);
    sprite.mapTexture(texturePacks[texturePackOrName]);
  }
}

// Cancels sprite dragging if there is an active sprite dragging.
goldenhorse.prototype.cancelSpriteDrag = function(){
  if (mode == 0){
    return;
  }
  if (draggingSprite){
    draggingSprite.onDragStopped();
    draggingSprite = false;
  }
  dragCandidate = false;
}

// Sets the width of given sprite.
goldenhorse.prototype.setSpriteWidth = function(sprite, widthPercent){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setSpriteWidth, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.setSpriteWidth, preConditions.sprite, sprite);
  preConditions.checkIfDefined(goldenhorse.setSpriteWidth, preConditions.widthPercent, widthPercent);
  preConditions.checkIfNumber(goldenhorse.setSpriteWidth, preConditions.widthPercent, widthPercent);
  preConditions.checkIfSpriteHasFixedWidth(goldenhorse.setSpriteWidth, sprite);
  preConditions.checkIfLessThan(goldenhorse.setSpriteWidth, preConditions.widthPercent, widthPercent, 0);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.setSpriteWidth, sprite);
  sprite.setWidthPercent(widthPercent);
  sprite.previewModeWidth = widthPercent;
}

// Sets the height of given sprite.
goldenhorse.prototype.setSpriteHeight = function(sprite, heightPercent){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setSpriteHeight, preConditions.sprite, sprite);
  preConditions.checkIfSprite(goldenhorse.setSpriteHeight, preConditions.sprite, sprite);
  preConditions.checkIfDefined(goldenhorse.setSpriteHeight, preConditions.heightPercent, heightPercent);
  preConditions.checkIfNumber(goldenhorse.setSpriteHeight, preConditions.heightPercent, heightPercent);
  preConditions.checkIfSpriteHasFixedHeight(goldenhorse.setSpriteHeight, sprite);
  preConditions.checkIfLessThan(goldenhorse.setSpriteHeight, preConditions.heightPercent, heightPercent, 0);
  preConditions.checkIfSpriteInsideActiveScene(goldenhorse.setSpriteHeight, sprite);
  sprite.setHeightPercent(heightPercent);
  sprite.previewModeHeight = heightPercent;
}

// CONTAINER FUNCTIONS *********************************************************

// Hides the border of a container.
goldenhorse.prototype.hideContainerBorder = function(container){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.hideContainerBorder, preConditions.container, container);
  preConditions.checkIfContainer(goldenhorse.hideContainerBorder, container);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.hideContainerBorder, container);
  preConditions.checkIfContainerHasBorder(goldenhorse.hideContainerBorder, container);
  container.rectangle.mesh.visible = false;
}

// Shows the border of a container.
goldenhorse.prototype.showContainerBorder = function(container){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.showContainerBorder, preConditions.container, container);
  preConditions.checkIfContainer(goldenhorse.showContainerBorder, container);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.showContainerBorder, container);
  preConditions.checkIfContainerHasBorder(goldenhorse.showContainerBorder, container);
  container.rectangle.mesh.visible = true;
}

// Sets the border color of a container.
goldenhorse.prototype.setContainerBorderColor = function(container, colorName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setContainerBorderColor, preConditions.container, container);
  preConditions.checkIfDefined(goldenhorse.setContainerBorderColor, preConditions.colorName, colorName);
  preConditions.checkIfContainer(goldenhorse.setContainerBorderColor, container);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.setContainerBorderColor, container);
  preConditions.checkIfContainerHasBorder(goldenhorse.setContainerBorderColor, container);
  container.rectangle.mesh.material.uniforms.color.value.set(colorName);
}

// Sets the background color of a container.
goldenhorse.prototype.setContainerBackgroundColor = function(container, colorName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setContainerBackgroundColor, preConditions.container, container);
  preConditions.checkIfDefined(goldenhorse.setContainerBackgroundColor, preConditions.colorName, colorName);
  preConditions.checkIfContainer(goldenhorse.setContainerBackgroundColor, container);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.setContainerBackgroundColor, container);
  preConditions.checkIfContainerHasBackground(goldenhorse.setContainerBackgroundColor, container);
  container.backgroundSprite.setColor(colorName);
}

// Sets the alpha value of the background of a container.
goldenhorse.prototype.setContainerBackgroundAlpha = function(container, alpha){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setContainerBackgroundAlpha, preConditions.container, container);
  preConditions.checkIfDefined(goldenhorse.setContainerBackgroundAlpha, preConditions.colorName, alpha);
  preConditions.checkIfContainer(goldenhorse.setContainerBackgroundAlpha, container);
  preConditions.checkIfNumber(goldenhorse.setContainerBackgroundAlpha, preConditions.alpha, alpha);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.setContainerBackgroundAlpha, container);
  preConditions.checkIfContainerHasBackground(goldenhorse.setContainerBackgroundAlpha, container);
  container.backgroundSprite.setAlpha(alpha);
}

// Hides the background of a container.
goldenhorse.prototype.hideContainerBackground = function(container){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.hideContainerBackground, preConditions.container, container);
  preConditions.checkIfContainer(goldenhorse.hideContainerBackground, container);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.hideContainerBackground, container);
  preConditions.checkIfContainerHasBackground(goldenhorse.hideContainerBackground, container);
  container.backgroundSprite.mesh.visible = false;
}

// Shows the background of a container.
goldenhorse.prototype.showContainerBackground = function(container){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.showContainerBackground, preConditions.container, container);
  preConditions.checkIfContainer(goldenhorse.showContainerBackground, container);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.showContainerBackground, container);
  preConditions.checkIfContainerHasBackground(goldenhorse.showContainerBackground, container);
  container.backgroundSprite.mesh.visible = true;
}

// Hides a container and its children. Does nothing if the container is already hidden.
goldenhorse.prototype.hideContainer = function(container){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.hideContainer, preConditions.container, container);
  preConditions.checkIfContainer(goldenhorse.hideContainer, container);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.hideContainer, container);
  container.hide();
}

// Shows a container and its children. Does nothing if the container is already shown.
goldenhorse.prototype.showContainer = function(container){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.showContainer, preConditions.container, container);
  preConditions.checkIfContainer(goldenhorse.showContainer, container);
  preConditions.checkIfContainerInsideActiveScene(goldenhorse.showContainer, container);
  container.show();
}

// VIRTUAL KEYBOARD FUNCTIONS **************************************************

// Activates a virtual keyboard.
goldenhorse.prototype.activateVirtualKeyboard = function(virtualKeyboard){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.activateVirtualKeyboard, preConditions.virtualKeyboard, virtualKeyboard);
  preConditions.checkIfVirtualKeyboard(goldenhorse.activateVirtualKeyboard, virtualKeyboard);
  preConditions.checkIfVirtualKeyboardInsideActiveScene(goldenhorse.activateVirtualKeyboard, virtualKeyboard);
  virtualKeyboard.activate();
}

// Hides a virtual keyboard. Does nothing if the virtual keyboard if already hidden.
goldenhorse.prototype.hideVirtualKeyboard = function(virtualKeyboard){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.hideVirtualKeyboard, preConditions.virtualKeyboard, virtualKeyboard);
  preConditions.checkIfVirtualKeyboard(goldenhorse.hideVirtualKeyboard, virtualKeyboard);
  preConditions.checkIfVirtualKeyboardInsideActiveScene(goldenhorse.hideVirtualKeyboard, virtualKeyboard);
  if (virtualKeyboard.isHidden){
    return;
  }
  virtualKeyboard.hideVisually();
}

// Shows a virtual keyboard. Does nothing if the virtual keyboard is already visible.
goldenhorse.prototype.showVirtualKeyboard = function(virtualKeyboard){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.showVirtualKeyboard, preConditions.virtualKeyboard, virtualKeyboard);
  preConditions.checkIfVirtualKeyboard(goldenhorse.showVirtualKeyboard, virtualKeyboard);
  preConditions.checkIfVirtualKeyboardInsideActiveScene(goldenhorse.showVirtualKeyboard, virtualKeyboard);
  if (!virtualKeyboard.isHidden){
    return;
  }
  virtualKeyboard.showVisually();
}

// Deactivates a virtual keyboard. Does nothing if the virtual keyboard is already
// not active.
goldenhorse.prototype.deactivateVirtualKeyboard = function(virtualKeyboard){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.deactivateVirtualKeyboard, preConditions.virtualKeyboard, virtualKeyboard);
  preConditions.checkIfVirtualKeyboard(goldenhorse.deactivateVirtualKeyboard, virtualKeyboard);
  preConditions.checkIfVirtualKeyboardInsideActiveScene(goldenhorse.deactivateVirtualKeyboard, virtualKeyboard);
  virtualKeyboard.deactivate();
}

// NETWORKING FUNCTIONS ********************************************************

// Connects to a game server, the URL of which is set by setWSServerURL CLI
// command. The server and the client interacts through Rhubarb protocol
// definition files, the path of which is set by setProtocolDefinition CLI
// command. onReady callback parameter is executed when the connection is
// established. onError is executed with errorReason parameter in case
// there is an error establishing the connection.
goldenhorse.prototype.connectToServer = function(onReady, onError){
  if (mode == 0){
    return;
  }
  preConditions.checkMultiplayerContext(goldenhorse.connectToServer);
  preConditions.checkIfDefined(goldenhorse.connectToServer, preConditions.onReady, onReady);
  preConditions.checkIfDefined(goldenhorse.connectToServer, preConditions.onError, onError);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.connectToServer, preConditions.onReady, onReady);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.connectToServer, preConditions.onError, onError);
  Rhubarb.init({
    protocolDefinitionPath: "./protocol_definitions/" + protocolDefinitionFileName,
    workerPath: (isDeployment? "./js/worker/RhubarbWorker.min.js": "/js/third_party/RhubarbWorker.min.js"),
    serverAddress: isDeployment? serverWSURL: developmentServerWSURL,
    onReady: onReady,
    onError: onError
  });
}

// Disconnects from server and clears Rhubarb context.
// Does nothing if not connected to server.
goldenhorse.prototype.clearServerConnection = function(){
  if (mode == 0){
    return;
  }
  try{
    Rhubarb.destroy();
  }catch(err){}
}

// Sets a listener for server connection status. The callbackFunction
// is executed when the connection between the server and the client is lost.
// If client needs to try reconnecting, goldenhorse.clearServerConnection API needs
// to be used before goldenhorse.connectFromServer.
goldenhorse.prototype.onDisconnectedFromServer = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onDisconnectedFromServer, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onDisconnectedFromServer, preConditions.callbackFunction, callbackFunction);
  Rhubarb.onDisconnectedFromServer(callbackFunction);
}

// Sends a message from the server. protocolName is the protocol name defined
// in protocol definition file. valuesByParameterName is an object containing
// values to be send by protocol parameter names. Read
// https://github.com/goldenhorse0912/Rhubarb/wiki/API-reference#send for more info.
goldenhorse.prototype.sendToServer = function(protocolName, valuesByParameterName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.sendToServer, preConditions.protocolName, protocolName);
  preConditions.checkIfDefined(goldenhorse.sendToServer, preConditions.valuesByParameterName, valuesByParameterName);
  Rhubarb.send(protocolName, valuesByParameterName);
}

// Listens to server for given protocol and executes callbackFunction when a message
// received. The callbackFunction is executed with getter parameter. getter is a function
// which expects a protocol parameter name as input and returns received value
// for that parameter. Read https://github.com/goldenhorse0912/Rhubarb/wiki/API-reference#onReceived
// for more info.
goldenhorse.prototype.onReceivedFromServer = function(protocolName, callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onReceivedFromServer, preConditions.protocolName, protocolName);
  preConditions.checkIfDefined(goldenhorse.onReceivedFromServer, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onReceivedFromServer, preConditions.callbackFunction, callbackFunction);
  Rhubarb.onReceived(protocolName, callbackFunction);
}

// Listens for latency between the server and the client. The callbackFunction is
// executed with newLatency (in ms) parameter when the latency is updated.
goldenhorse.prototype.onLatencyUpdated = function(callbackFunction){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.onLatencyUpdated, preConditions.callbackFunction, callbackFunction);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.onLatencyUpdated, preConditions.callbackFunction, callbackFunction);
  Rhubarb.onLatencyUpdated(callbackFunction);
}

// DOM FUNCTIONS ***************************************************************

// Creates and returns a new DOM element of given type (span, div etc.). Supported
// properties are:
// * width (in pixels). Default is 50.
// * height (in pixels). Default is 50.
// * backgroundColor. Default is white.
// * centerXPercent. Default is 0.
// * centerYPercent. Default is 0.
// * borderRadiusPercent. Default is none.
// * opacity. Default is 1.
goldenhorse.prototype.createDOMElement = function(type, properties){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.createDOMElement, preConditions.type, type);
  preConditions.checkIfDefined(goldenhorse.createDOMElement, preConditions.properties, properties);
  preConditions.checkIfString(goldenhorse.createDOMElement, preConditions.type, type);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createDOMElement, preConditions.width, properties.width);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createDOMElement, preConditions.height, properties.height);
  preConditions.checkIfStringOnlyIfExists(goldenhorse.createDOMElement, preConditions.backgroundColor, properties.backgroundColor);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createDOMElement, preConditions.centerXPercent, properties.centerXPercent);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createDOMElement, preConditions.centerYPercent, properties.centerYPercent);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createDOMElement, preConditions.borderRadiusPercent, properties.borderRadiusPercent);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.createDOMElement, preConditions.opacity, properties.opacity);
  return new DOMElement(type, properties);
}

// Sets the center position of given DOM element created via createDOMElement scripting API.
goldenhorse.prototype.setDOMElementPosition = function(domElement, centerXPercent, centerYPercent){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setDOMElementPosition, preConditions.domElement, domElement);
  preConditions.checkIfDefined(goldenhorse.setDOMElementPosition, preConditions.centerXPercent, centerXPercent);
  preConditions.checkIfDefined(goldenhorse.setDOMElementPosition, preConditions.centerYPercent, centerYPercent);
  preConditions.checkIfDOMElement(goldenhorse.setDOMElementPosition, domElement);
  preConditions.checkIfNumber(goldenhorse.setDOMElementPosition, preConditions.centerXPercent, centerXPercent);
  preConditions.checkIfNumber(goldenhorse.setDOMElementPosition, preConditions.centerYPercent, centerYPercent);
  domElement.setPosition(centerXPercent, centerYPercent);
}

// Sets the background color of given DOM element created via createDOMElement scripting API.
goldenhorse.prototype.setDOMElementBackgroundColor = function(domElement, backgroundColor){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setDOMElementBackgroundColor, preConditions.domElement, domElement);
  preConditions.checkIfDefined(goldenhorse.setDOMElementBackgroundColor, preConditions.backgroundColor, backgroundColor);
  preConditions.checkIfDOMElement(goldenhorse.setDOMElementBackgroundColor, domElement);
  preConditions.checkIfString(goldenhorse.setDOMElementBackgroundColor, preConditions.backgroundColor, backgroundColor);
  domElement.setBackgroundColor(backgroundColor);
}

// Sets the opacity of given DOM element created via createDOMElement scripting API.
goldenhorse.prototype.setDOMElementOpacity = function(domElement, opacity){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setDOMElementOpacity, preConditions.domElement, domElement);
  preConditions.checkIfDefined(goldenhorse.setDOMElementOpacity, preConditions.opacity, opacity);
  preConditions.checkIfDOMElement(goldenhorse.setDOMElementOpacity, domElement);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.setDOMElementOpacity, preConditions.opacity, opacity);
  domElement.setOpacity(opacity);
}

// Sets the size in pixels of given DOM element created via createDOMElement scripting API.
goldenhorse.prototype.setDOMElementSize = function(domElement, width, height){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setDOMElementSize, preConditions.domElement, domElement);
  preConditions.checkIfDefined(goldenhorse.setDOMElementSize, preConditions.width, width);
  preConditions.checkIfDefined(goldenhorse.setDOMElementSize, preConditions.height, height);
  preConditions.checkIfDOMElement(goldenhorse.setDOMElementSize, domElement);
  preConditions.checkIfNumber(goldenhorse.setDOMElementSize, preConditions.width, width);
  preConditions.checkIfNumber(goldenhorse.setDOMElementSize, preConditions.height, height);
  domElement.setSize(width, height);
}

// Aligns the position of a DOM element to given 3D position on each frame.
goldenhorse.prototype.align3DPosition = function(domElement, x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.align3DPosition, preConditions.domElement, domElement);
  preConditions.checkIfDefined(goldenhorse.align3DPosition, preConditions.x, x);
  preConditions.checkIfDefined(goldenhorse.align3DPosition, preConditions.y, y);
  preConditions.checkIfDefined(goldenhorse.align3DPosition, preConditions.z, z);
  preConditions.checkIfDOMElement(goldenhorse.align3DPosition, domElement);
  preConditions.checkIfNumber(goldenhorse.align3DPosition, preConditions.x, x);
  preConditions.checkIfNumber(goldenhorse.align3DPosition, preConditions.y, y);
  preConditions.checkIfNumber(goldenhorse.align3DPosition, preConditions.z, z);

  domElements3DAligned[domElement.name] = {x: x, y: y, z: z};
}

// Stops aligning the position of a DOM element. This may be used after align3DPosition API.
goldenhorse.prototype.unalign3DPosition = function(domElement){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.unalign3DPosition, preConditions.domElement, domElement);
  preConditions.checkIfDOMElement(goldenhorse.unalign3DPosition, domElement);

  delete domElements3DAligned[domElement.name];
}

// AR FUNCTIONS ****************************************************************

// Returns if AR is supported in current client device.
goldenhorse.prototype.isARSupported = function(){
  if (mode == 0){
    return;
  }

  return augmentedRealityHandler.isSupported();
}

// Opens AR view for given model instance and AR model name. See README of models
// folder for more details.
goldenhorse.prototype.startAugmentedReality = function(modelInstance, arModelName){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.startAugmentedReality, preConditions.modelInstance, modelInstance);
  preConditions.checkIfDefined(goldenhorse.startAugmentedReality, preConditions.arModelName, arModelName);
  preConditions.checkIfModelInstance(goldenhorse.startAugmentedReality, modelInstance);
  preConditions.checkIfModelInstanceInActiveScene(goldenhorse.startAugmentedReality, modelInstance);
  preConditions.checkIfARSupported(goldenhorse.startAugmentedReality);
  preConditions.checkIfModelInstanceHasARModel(goldenhorse.startAugmentedReality, modelInstance, arModelName);

  augmentedRealityHandler.start(modelInstance.model.info.folderName, arModelName);
}

// AI FUNCTIONS ****************************************************************

// Sets the steering behavior of given object.
goldenhorse.prototype.setSteeringBehavior = function(object, behaviorName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setSteeringBehavior, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.setSteeringBehavior, preConditions.behaviorName, behaviorName);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setSteeringBehavior, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setSteeringBehavior, object);
  preConditions.checkIfString(goldenhorse.setSteeringBehavior, preConditions.behaviorName, behaviorName);
  preConditions.checkIfSteerable(goldenhorse.setSteeringBehavior, object);
  preConditions.checkIfObjectHasBehavior(goldenhorse.setSteeringBehavior, object, behaviorName);

  steeringHandler.setBehavior(object, behaviorName);
}

// Stops a steerable.
goldenhorse.prototype.stopSteerable = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setSteeringBehavior, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setSteeringBehavior, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setSteeringBehavior, object);
  preConditions.checkIfSteerable(goldenhorse.setSteeringBehavior, object);

  steeringHandler.stopSteerable(object);
}

// Sets a target position of a steerable. Target position is consumed by these
// steering behaviors:
// * Seek
// * Flee
// * Arrive
goldenhorse.prototype.setSteerableTargetPosition = function(object, positionVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setSteerableTargetPosition, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.setSteerableTargetPosition, preConditions.positionVector, positionVector);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setSteerableTargetPosition, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setSteerableTargetPosition, object);
  preConditions.checkIfSteerable(goldenhorse.setSteerableTargetPosition, object);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.setSteerableTargetPosition, preConditions.positionVector, positionVector);
  preConditions.checkIfObjectIsJumping(goldenhorse.setSteerableTargetPosition, object);

  steeringHandler.setTargetPosition(object, positionVector);
}

// Unsets a target position of a steerable set via setSteerableTargetPosition API.
goldenhorse.prototype.unsetSteerableTargetPosition = function(object){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.unsetSteerableTargetPosition, preConditions.object, object);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.unsetSteerableTargetPosition, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.unsetSteerableTargetPosition, object);
  preConditions.checkIfSteerable(goldenhorse.unsetSteerableTargetPosition, object);
  preConditions.checkIfObjectIsJumping(goldenhorse.unsetSteerableTargetPosition, object);

  steeringHandler.unsetTargetPosition(object);
}

// Makes a steerable gradually look at given target position.
goldenhorse.prototype.setSteerableLookTarget = function(object, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setSteerableLookTarget, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.setSteerableLookTarget, preConditions.targetVector, targetVector);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setSteerableLookTarget, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setSteerableLookTarget, object);
  preConditions.checkIfSteerable(goldenhorse.setSteerableLookTarget, object);
  preConditions.checkIfSteerableIsBeingUpdated(goldenhorse.setSteerableLookTarget, object);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.setSteerableLookTarget, preConditions.targetVector, targetVector);

  steeringHandler.setLookTarget(object, targetVector);
}

// Calculates the shortest path between given points. This API returns nothing
// as it automatically pipes the resulting path to the PathFollowingBehavior, if
// the behavior is constructed with given AStar object. So use this API together
// with the PathFollowingBehavior. If there's no nearby graph vertex of given
// vectors, this API does not calculate any path. In that case increasing the world
// bin size might help. Optional preventObjects parameter containing an array of
// added objects/object groups may be passed in order to try to compute a path
// that is not blocked by these entities.
goldenhorse.prototype.findShortestPath = function(aStar, fromVector, toVector, preventObjects){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.findShortestPath, preConditions.aStar, aStar);
  preConditions.checkIfDefined(goldenhorse.findShortestPath, preConditions.fromVector, fromVector);
  preConditions.checkIfDefined(goldenhorse.findShortestPath, preConditions.toVector, toVector);
  preConditions.checkIfAStar(goldenhorse.findShortestPath, aStar);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.findShortestPath, preConditions.fromVector, fromVector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.findShortestPath, preConditions.toVector, toVector);
  preConditions.checkIfPreventObjectsOnlyIfExists(goldenhorse.findShortestPath, preConditions.preventObjects, preventObjects);

  steeringHandler.calculateShortestPath(aStar, fromVector, toVector, preventObjects);
}

// Makes a steerable represented as hidingObject hide from another steerable
// represented as targetObject. This API should be used with HideBehavior.
goldenhorse.prototype.hideFrom = function(hidingObject, targetObject){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.hideFrom, preConditions.hidingObject, hidingObject);
  preConditions.checkIfDefined(goldenhorse.hideFrom, preConditions.targetObject, targetObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.hideFrom, preConditions.hidingObject, hidingObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.hideFrom, preConditions.targetObject, targetObject);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.hideFrom, hidingObject);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.hideFrom, targetObject);
  preConditions.checkIfSteerable(goldenhorse.hideFrom, hidingObject);
  preConditions.checkIfSteerable(goldenhorse.hideFrom, targetObject);
  preConditions.checkIfObjectIsJumping(goldenhorse.hideFrom, hidingObject);

  steeringHandler.makeSteerableHideFromSteerable(hidingObject, targetObject);
}

// Makes a steerable stop hiding from other entities. It makes sense to use this
// API with HideBehavior, after using hideFrom API.
goldenhorse.prototype.stopHiding = function(hidingObject){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.stopHiding, preConditions.hidingObject, hidingObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.stopHiding, preConditions.hidingObject, hidingObject);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.stopHiding, hidingObject);
  preConditions.checkIfSteerable(goldenhorse.stopHiding, hidingObject);
  preConditions.checkIfObjectIsJumping(goldenhorse.stopHiding, hidingObject);

  steeringHandler.makeSteerableStopHiding(hidingObject);
}

// Makes a steerable represented by pursuingObject chase another steerable
// represented by targetObject. This API should be used with PursueBehavior.
goldenhorse.prototype.pursue = function(pursuingObject, targetObject){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.pursue, preConditions.pursuingObject, pursuingObject);
  preConditions.checkIfDefined(goldenhorse.pursue, preConditions.targetObject, targetObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.pursue, preConditions.pursuingObject, pursuingObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.pursue, preConditions.targetObject, targetObject);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.pursue, pursuingObject);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.pursue, targetObject);
  preConditions.checkIfSteerable(goldenhorse.pursue, pursuingObject);
  preConditions.checkIfSteerable(goldenhorse.pursue, targetObject);
  preConditions.checkIfObjectIsJumping(goldenhorse.pursue, pursuingObject);

  steeringHandler.setTargetSteerable(pursuingObject, targetObject);
}

// Makes a steerable represented by evadingObject evade another steerable
// represented by targetObject. This API should be used with EvadeBehavior.
goldenhorse.prototype.evade = function(evadingObject, targetObject){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.evade, preConditions.evadingObject, evadingObject);
  preConditions.checkIfDefined(goldenhorse.evade, preConditions.targetObject, targetObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.evade, preConditions.evadingObject, evadingObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.evade, preConditions.targetObject, targetObject);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.evade, evadingObject);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.evade, targetObject);
  preConditions.checkIfSteerable(goldenhorse.evade, evadingObject);
  preConditions.checkIfSteerable(goldenhorse.evade, targetObject);
  preConditions.checkIfObjectIsJumping(goldenhorse.evade, evadingObject);

  steeringHandler.setTargetSteerable(evadingObject, targetObject);
}

// Makes a steerable stop pursuing other steerables. It makes sense to use this API
// with PursueBehavior, after using pursue API.
goldenhorse.prototype.stopPursuing = function(pursuingObject){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.stopPursuing, preConditions.pursuingObject, pursuingObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.stopPursuing, preConditions.pursuingObject, pursuingObject);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.stopPursuing, pursuingObject);
  preConditions.checkIfSteerable(goldenhorse.stopPursuing, pursuingObject);
  preConditions.checkIfObjectIsJumping(goldenhorse.stopPursuing, pursuingObject);

  steeringHandler.unsetTargetSteerable(pursuingObject);
}

// Makes a steerable stop evading other steerables. It makes sense to use this API
// with EvadeBehavior, after using evade API.
goldenhorse.prototype.stopEvading = function(evadingObject){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.stopEvading, preConditions.evadingObject, evadingObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.stopEvading, preConditions.evadingObject, evadingObject);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.stopEvading, evadingObject);
  preConditions.checkIfSteerable(goldenhorse.stopEvading, evadingObject);
  preConditions.checkIfObjectIsJumping(goldenhorse.stopEvading, evadingObject);

  steeringHandler.unsetTargetSteerable(evadingObject);
}

// Makes a steerable manually jump. toTakeoffBehaviorName parameter represents the
// steering behavior used until the steerable reaches to the takeoff point.
// completeCallback function is executed when the jump is completed. When a
// jump is completed, a steering behavior needs to be set to the steerable in order
// to continue the movement. Note that this API returns false if the jump described
// by the jumpDescriptor is not achievable by given steerable, true otherwise.
goldenhorse.prototype.jump = function(object, jumpDescriptor, toTakeoffBehaviorName, completeCallback){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.jump, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.jump, preConditions.jumpDescriptor, jumpDescriptor);
  preConditions.checkIfDefined(goldenhorse.jump, preConditions.toTakeoffBehaviorName, toTakeoffBehaviorName);
  preConditions.checkIfDefined(goldenhorse.jump, preConditions.completeCallback, completeCallback);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.jump, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.jump, object);
  preConditions.checkIfSteerable(goldenhorse.jump, object);
  preConditions.checkIfJumpDescriptor(goldenhorse.jump, jumpDescriptor);
  preConditions.checkIfJumpDescriptorInActiveScene(goldenhorse.jump, jumpDescriptor.goldenhorseName);
  preConditions.checkIfString(goldenhorse.jump, preConditions.toTakeoffBehaviorName, toTakeoffBehaviorName);
  preConditions.checkIfObjectHasBehavior(goldenhorse.jump, object, toTakeoffBehaviorName);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.jump, preConditions.completeCallback, completeCallback);
  preConditions.checkIfObjectIsJumping(goldenhorse.jump, object);

  return steeringHandler.jump(object, jumpDescriptor, toTakeoffBehaviorName, completeCallback);
}

// Executes func parameter with x, y, z coordinates for each waypoint of
// the path of given AStar object. Note that paths of AStar objects are
// reconstructed after finding the shortest distance, either manually or
// automatically by RandomPathBehavior.
goldenhorse.prototype.executeForEachWaypoint = function(aStar, func){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.executeForEachWaypoint, preConditions.aStar, aStar);
  preConditions.checkIfDefined(goldenhorse.executeForEachWaypoint, preConditions.func, func);
  preConditions.checkIfAStar(goldenhorse.executeForEachWaypoint, aStar);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.executeForEachWaypoint, preConditions.func, func);

  var path = aStar.path;
  for (var i = 0; i < path.length; i ++){
    var wp = path.waypoints[i];
    func(wp.x, wp.y, wp.z);
  }
}

// Sets the look direction of given steerable. Unlike setSteerableLookTarget API which
// eventually makes a steerable gradually look at given target depending on the lookSpeed
// of the steerable, this API immediately modifies the look direction.
goldenhorse.prototype.setSteerableLookDirection = function(object, lookDirectionVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setSteerableLookDirection, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.setSteerableLookDirection, preConditions.positionVector, lookDirectionVector);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.setSteerableLookDirection, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.setSteerableLookDirection, object);
  preConditions.checkIfSteerable(goldenhorse.setSteerableLookDirection, object);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.setSteerableLookDirection, preConditions.positionVector, lookDirectionVector);

  steeringHandler.setLookDirection(object, lookDirectionVector);
}

// Fills the targetVector with the look direction of given steerable object and returns it.
goldenhorse.prototype.getSteerableLookDirection = function(object, targetVector){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.getSteerableLookDirection, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.getSteerableLookDirection, preConditions.targetVector, targetVector);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.getSteerableLookDirection, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.getSteerableLookDirection, object);
  preConditions.checkIfSteerable(goldenhorse.getSteerableLookDirection, object);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.getSteerableLookDirection, preConditions.targetVector, targetVector);

  return steeringHandler.getLookDirection(object, targetVector);
}

// Ensures the RandomPathBehavior tries to start from the closest graph vertex
// to given steerable. This API may be useful when the random path behavior of
// object is changed to some other behavior before the object reaches to the
// destination vertex, and then the random path behavior is activated again.
// If given behavior is a blended or a priority steering behavior, the child
// random path behaviors are reset.
goldenhorse.prototype.resetRandomPathBehavior = function(object, behaviorName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.resetRandomPathBehavior, preConditions.object, object);
  preConditions.checkIfDefined(goldenhorse.resetRandomPathBehavior, preConditions.behaviorName, behaviorName);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.resetRandomPathBehavior, preConditions.object, object);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.resetRandomPathBehavior, object);
  preConditions.checkIfString(goldenhorse.resetRandomPathBehavior, preConditions.behaviorName, behaviorName);
  preConditions.checkIfSteerable(goldenhorse.resetRandomPathBehavior, object);
  preConditions.checkIfObjectHasBehavior(goldenhorse.resetRandomPathBehavior, object, behaviorName);
  preConditions.checkIfRandomPathOrBlendedOrPriorityBehavior(goldenhorse.resetRandomPathBehavior, object, behaviorName);

  steeringHandler.resetRandomPathBehavior(object, behaviorName);
}

// Updates an information inside given knowledge.
goldenhorse.prototype.updateInformation = function(knowledge, informationName, newValue){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.updateInformation, preConditions.knowledge, knowledge);
  preConditions.checkIfDefined(goldenhorse.updateInformation, preConditions.informationName, informationName);
  preConditions.checkIfDefined(goldenhorse.updateInformation, preConditions.newValue, newValue);
  preConditions.checkIfKnowledge(goldenhorse.updateInformation, knowledge);
  preConditions.checkIfKnowledgeHasInformation(goldenhorse.updateInformation, knowledge, informationName);
  preConditions.checkIfKnowledgeInsideActiveScene(goldenhorse.updateInformation, knowledge);
  preConditions.checkIfValueTypeSuitableForInformation(goldenhorse.updateInformation, knowledge, informationName, newValue);

  decisionHandler.updateInformation(knowledge, informationName, newValue);
}

// Returns the decision result of given decision tree.
goldenhorse.prototype.makeDecision = function(decisionTree){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.makeDecision, preConditions.decisionTree, decisionTree);
  preConditions.checkIfDecisionTree(goldenhorse.makeDecision, decisionTree);
  preConditions.checkIfDecisionTreeInActiveScene(goldenhorse.makeDecision, decisionTree);

  return decisionTree.resultCache;
}

// Resets given state machine by setting the current state to the entry state.
goldenhorse.prototype.resetStateMachine = function(stateMachine){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.resetStateMachine, preConditions.stateMachine, stateMachine);
  preConditions.checkIfStateMachine(goldenhorse.resetStateMachine, stateMachine);
  preConditions.checkIfStateMachineInActiveScene(goldenhorse.resetStateMachine, stateMachine);

  decisionHandler.resetStateMachine(stateMachine);
}

// Activates a state machine for updates. Note that state machines are deactivated by default.
goldenhorse.prototype.activateStateMachine = function(stateMachine){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.activateStateMachine, preConditions.stateMachine, stateMachine);
  preConditions.checkIfStateMachine(goldenhorse.activateStateMachine, stateMachine);
  preConditions.checkIfStateMachineInActiveScene(goldenhorse.activateStateMachine, stateMachine);

  decisionHandler.activateStateMachine(stateMachine);
}

// Deactivates a state machine for updates. Note that state machines are deactivated by default.
goldenhorse.prototype.deactivateStateMachine = function(stateMachine){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.deactivateStateMachine, preConditions.stateMachine, stateMachine);
  preConditions.checkIfStateMachine(goldenhorse.deactivateStateMachine, stateMachine);
  preConditions.checkIfStateMachineInActiveScene(goldenhorse.deactivateStateMachine, stateMachine);

  decisionHandler.deactivateStateMachine(stateMachine);
}

// Resets a knowledge setting each information to their initial value.
goldenhorse.prototype.resetKnowledge = function(knowledge){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.resetKnowledge, preConditions.knowledge, knowledge);
  preConditions.checkIfKnowledge(goldenhorse.resetKnowledge, knowledge);
  preConditions.checkIfKnowledgeInsideActiveScene(goldenhorse.resetKnowledge, knowledge);

  decisionHandler.resetKnowledge(knowledge);
}

// SCRIPT RELATED FUNCTIONS ****************************************************

// Starts a script. To get scripts use this format as scriptName:
// parentdir1_parentdir2_....._parentdirX_scriptFileName
// For example in order to get a script under the scripts/ root folder
// example.js, the scriptName parameter should be example. However, to get
// a script under scripts/testFolder/test.js, the scriptName parameter should be
// testFolder_test.
goldenhorse.prototype.startScript = function(scriptName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.startScript, preConditions.scriptName, scriptName);
  var script = scripts[scriptName];
  preConditions.checkIfScriptExists(goldenhorse.startScript, null, script);
  script.start();
}

// Stops a script. The scriptName parameter is explained with startScript API.
goldenhorse.prototype.stopScript = function(scriptName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.stopScript, preConditions.scriptName, scriptName);
  var script = scripts[scriptName.replace(/-/g, "")];
  preConditions.checkIfScriptExists(goldenhorse.stopScript, null, script);
  script.stop();
}

// UTILITY FUNCTIONS ***********************************************************

//  Creates a new vector from x, y and z coordinates.
goldenhorse.prototype.vector = function(x, y, z){
  if (mode == 0){
    return;
  }
  var obj = new Object();
  if (typeof x == UNDEFINED){
    obj.x = 0;
  }else{
    preConditions.checkIfNumber(goldenhorse.vector, preConditions.x, x);
    obj.x = x;
  }
  if (typeof y == UNDEFINED){
    obj.y = 0;
  }else{
    preConditions.checkIfNumber(goldenhorse.vector, preConditions.y, y);
    obj.y = y;
  }
  if (typeof z == UNDEFINED){
    obj.z = 0;
  }else{
    preConditions.checkIfNumber(goldenhorse.vector, preConditions.z, z);
    obj.z = z;
  }
  return obj;
}

//  Returns the distance between two vectors.
goldenhorse.prototype.distance = function(vec1, vec2){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.distance, preConditions.vec1, vec1);
  preConditions.checkIfDefined(goldenhorse.distance, preConditions.vec2, vec2);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.distance, preConditions.vec1, vec1);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.distance, preConditions.vec2, vec2);
  var dx = vec2.x - vec1.x;
  var dy = vec2.y - vec1.y;
  var dz = vec2.z - vec1.z;
  return Math.sqrt(
    Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2)
  );
}

//  Returns the substraction of two vectors.
goldenhorse.prototype.sub = function(vec1, vec2, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.sub, preConditions.vec1, vec1);
  preConditions.checkIfDefined(goldenhorse.sub, preConditions.vec2, vec2);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.sub, preConditions.vec1, vec1);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.sub, preConditions.vec2, vec2);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.sub, preConditions.targetVector, targetVector);
  if (!(typeof targetVector == UNDEFINED)){
    targetVector.x = vec1.x - vec2.x;
    targetVector.y = vec1.y - vec2.y;
    targetVector.z = vec1.z - vec2.z;
    return targetVector;
  }
  var obj = new Object();
  obj.x = vec1.x - vec2.x;
  obj.y = vec1.y - vec2.y;
  obj.z = vec1.z - vec2.z;
  return obj;
}

//  Returns the summation of two vectors.
goldenhorse.prototype.add = function(vec1, vec2, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.add, preConditions.vec1, vec1);
  preConditions.checkIfDefined(goldenhorse.add, preConditions.vec2, vec2);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.add, preConditions.vec1, vec1);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.add, preConditions.vec2, vec2);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.add, preConditions.targetVector, targetVector);
  if (!(typeof targetVector == UNDEFINED)){
    targetVector.x = vec1.x + vec2.x;
    targetVector.y = vec1.y + vec2.y;
    targetVector.z = vec1.z + vec2.z;
    return targetVector;
  }
  var obj = new Object();
  obj.x = vec1.x + vec2.x;
  obj.y = vec1.y + vec2.y;
  obj.z = vec1.z + vec2.z;
  return obj;
}

//  Creates a new color object from the given HTML color name.
goldenhorse.prototype.color = function(colorName){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.color, preConditions.colorName, colorName);
  return new THREE.Color(colorName.toLowerCase());
}

//  Normalizes the vector given in the parameter. Note that this function modifies directly the
//  parameter and returns nothing.
goldenhorse.prototype.normalizeVector = function(vector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.normalizeVector, preConditions.vector, vector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.normalizeVector, preConditions.vector, vector);
  var len = Math.sqrt((vector.x * vector.x) + (vector.y * vector.y) + (vector.z * vector.z));
  vector.x = vector.x / len;
  vector.y = vector.y / len;
  vector.z = vector.z / len;
}

//  Returns the quaternion between two vectors.
goldenhorse.prototype.computeQuaternionFromVectors = function(vec1, vec2, targetQuaternion){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.computeQuaternionFromVectors, preConditions.vec1, vec1);
  preConditions.checkIfDefined(goldenhorse.computeQuaternionFromVectors, preConditions.vec2, vec2);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.computeQuaternionFromVectors, preConditions.vec1, vec1);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.computeQuaternionFromVectors, preConditions.vec2, vec2);
  preConditions.checkIfQuaternionOnlyIfDefined(goldenhorse.computeQuaternionFromVectors, preConditions.targetQuaternion, targetQuaternion);
  this.normalizeVector(vec1);
  this.normalizeVector(vec2);
  REUSABLE_VECTOR.set(vec1.x, vec1.y, vec1.z);
  REUSABLE_VECTOR_2.set(vec2.x, vec2.y, vec2.z);
  REUSABLE_QUATERNION.setFromUnitVectors(REUSABLE_VECTOR, REUSABLE_VECTOR_2);
  if (!targetQuaternion){
    return REUSABLE_QUATERNION.clone();
  }else{
    targetQuaternion.set(
      REUSABLE_QUATERNION.x, REUSABLE_QUATERNION.y, REUSABLE_QUATERNION.z, REUSABLE_QUATERNION.w
    );
    return targetQuaternion;
  }
}

//  Multiplies a vector by a scalar.
goldenhorse.prototype.multiplyScalar = function(vector, scalar, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.multiplyScalar, preConditions.scalar, scalar);
  preConditions.checkIfNumber(goldenhorse.multiplyScalar, preConditions.scalar, scalar);
  preConditions.checkIfDefined(goldenhorse.multiplyScalar, preConditions.vector, vector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.multiplyScalar, preConditions.vector, vector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.targetVector, preConditions.targetVector, targetVector);
  if (!targetVector){
    return this.vector(vector.x * scalar, vector.y * scalar, vector.z * scalar);
  }else{
    targetVector.x = vector.x * scalar;
    targetVector.y = vector.y * scalar;
    targetVector.z = vector.z * scalar;
    return targetVector;
  }
}

// Set the x, y, z components of a vector.
goldenhorse.prototype.setVector = function(vector, x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setVector, preConditions.vector, vector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.setVector, preConditions.vector, vector);
  preConditions.checkIfDefined(goldenhorse.setVector, preConditions.x, x);
  preConditions.checkIfDefined(goldenhorse.setVector, preConditions.y, y);
  preConditions.checkIfDefined(goldenhorse.setVector, preConditions.z, z);
  preConditions.checkIfNumber(goldenhorse.setVector, preConditions.x, x);
  preConditions.checkIfNumber(goldenhorse.setVector, preConditions.y, y);
  preConditions.checkIfNumber(goldenhorse.setVector, preConditions.z, z);
  vector.x = x;
  vector.y = y;
  vector.z = z;
  return vector;
}

// Returns a new THREE.Quaternion instance.
goldenhorse.prototype.quaternion = function(){
  if (mode == 0){
    return;
  }
  return new THREE.Quaternion();
}

// Requests pointer lock from window on the next click.
goldenhorse.prototype.requestPointerLock = function(){
  if (mode == 0){
    return;
  }
  preConditions.checkIfTrue(goldenhorse.requestPointerLock, "Pointer Lock API is not supported by this browser", (!pointerLockSupported || isMobile));
  pointerLockRequested = true;
}

// Returns the degree equivalent of an Euler angle.
goldenhorse.prototype.convertEulerToDegrees = function(eulerAngle){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.convertEulerToDegrees, preConditions.eulerAngle, eulerAngle);
  preConditions.checkIfNumber(goldenhorse.convertEulerToDegrees, preConditions.eulerAngle, eulerAngle);
  return ((eulerAngle * 180) / Math.PI);
}

// Returns whether the given key is pressed or not. See the keyCodeToChar
// variable for possible key names.
goldenhorse.prototype.isKeyPressed = function(key){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.isKeyPressed, preConditions.key, key);
  return keyboardBuffer[key];
}

// Sets the position of the camera.
goldenhorse.prototype.setCameraPosition = function(x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setCameraPosition, preConditions.x, x);
  preConditions.checkIfDefined(goldenhorse.setCameraPosition, preConditions.y, y);
  preConditions.checkIfDefined(goldenhorse.setCameraPosition, preConditions.z, z);
  preConditions.checkIfNumber(goldenhorse.setCameraPosition, preConditions.x, x);
  preConditions.checkIfNumber(goldenhorse.setCameraPosition, preConditions.y, y);
  preConditions.checkIfNumber(goldenhorse.setCameraPosition, preConditions.z, z);
  camera.position.set(x, y, z);
}

// Makes the camera look at specific position.
goldenhorse.prototype.lookAt = function(x, y, z){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.lookAt, preConditions.x, x);
  preConditions.checkIfDefined(goldenhorse.lookAt, preConditions.y, y);
  preConditions.checkIfDefined(goldenhorse.lookAt, preConditions.z, z);
  preConditions.checkIfNumber(goldenhorse.lookAt, preConditions.x, x);
  preConditions.checkIfNumber(goldenhorse.lookAt, preConditions.y, y);
  preConditions.checkIfNumber(goldenhorse.lookAt, preConditions.z, z);
  camera.lookAt(x, y, z);
}

// Rotates the vector around an axis by given angle.
goldenhorse.prototype.applyAxisAngle = function(vector, axisVector, angle, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.applyAxisAngle, preConditions.vector, vector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.applyAxisAngle, preConditions.vector, vector);
  preConditions.checkIfDefined(goldenhorse.applyAxisAngle, preConditions.axisVector, axisVector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.applyAxisAngle, preConditions.axisVector, axisVector);
  preConditions.checkIfDefined(goldenhorse.applyAxisAngle, preConditions.angle, angle);
  preConditions.checkIfNumber(goldenhorse.applyAxisAngle, preConditions.angle, angle);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.applyAxisAngle, preConditions.targetVector, targetVector);
  REUSABLE_VECTOR.set(vector.x, vector.y, vector.z);
  REUSABLE_VECTOR_2.set(axisVector.x, axisVector.y, axisVector.z);
  REUSABLE_VECTOR.applyAxisAngle(REUSABLE_VECTOR_2, angle);
  if (!(typeof targetVector == UNDEFINED)){
    targetVector.x = REUSABLE_VECTOR.x;
    targetVector.y = REUSABLE_VECTOR.y;
    targetVector.z = REUSABLE_VECTOR.z;
    return targetVector;
  }
  return this.vector(REUSABLE_VECTOR.x, REUSABLE_VECTOR.y, REUSABLE_VECTOR.z);
}

// Makes sourceObject keep its relative position to targetObject.
goldenhorse.prototype.trackObjectPosition = function(sourceObject, targetObject){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.trackObjectPosition, preConditions.sourceObject, sourceObject);
  preConditions.checkIfDefined(goldenhorse.trackObjectPosition, preConditions.targetObject, targetObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.trackObjectPosition, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.trackObjectPosition, preConditions.targetObject, targetObject);
  preConditions.checkIfChildObjectOnlyIfExists(goldenhorse.trackObjectPosition, preConditions.sourceObject, sourceObject);
  preConditions.checkIfChildObjectOnlyIfExists(goldenhorse.trackObjectPosition, preConditions.targetObject, targetObject);
  preConditions.checkIfDynamic(goldenhorse.trackObjectPosition, preConditions.targetObject, targetObject);
  preConditions.checkIfNotDynamic(goldenhorse.trackObjectPosition, preConditions.sourceObject, sourceObject);
  preConditions.checkIfChangeable(goldenhorse.trackObjectPosition, preConditions.sourceObject, sourceObject);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.trackObjectPosition, sourceObject);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.trackObjectPosition, targetObject);
  preConditions.checkIfNotFPSWeapon(goldenhorse.trackObjectPosition, sourceObject);
  preConditions.checkIfNotSteerable(goldenhorse.trackObjectPosition, sourceObject);
  sourceObject.trackObjectPosition(targetObject);
}

// Stops tracking an objects position for an object.
goldenhorse.prototype.untrackObjectPosition = function(sourceObject){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.untrackObjectPosition, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.untrackObjectPosition, preConditions.sourceObject, sourceObject);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.untrackObjectPosition, sourceObject);
  sourceObject.untrackObjectPosition();
}

// Creates and returns a rotation pivot for an object. This function is not
// optimized for the runtime. Use this function before setRotationPivot API on
// initialization. Instead of goldenhorse.rotate API that works on world axes, this
// function may be used with 0 offset parameters to achieve local rotation for objects.
goldenhorse.prototype.createRotationPivot = function(sourceObject, offsetX, offsetY, offsetZ){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.createRotationPivot, preConditions.sourceObject, sourceObject);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.createRotationPivot, preConditions.sourceObject, sourceObject);
  preConditions.checkIfDefined(goldenhorse.createRotationPivot, preConditions.offsetX, offsetX);
  preConditions.checkIfDefined(goldenhorse.createRotationPivot, preConditions.offsetY, offsetY);
  preConditions.checkIfDefined(goldenhorse.createRotationPivot, preConditions.offsetZ, offsetZ);
  preConditions.checkIfNumber(goldenhorse.createRotationPivot, preConditions.offsetX, offsetX);
  preConditions.checkIfNumber(goldenhorse.createRotationPivot, preConditions.offsetY, offsetY);
  preConditions.checkIfNumber(goldenhorse.createRotationPivot, preConditions.offsetZ, offsetZ);
  preConditions.checkIfObjectInsideActiveScene(goldenhorse.createRotationPivot, sourceObject);
  return sourceObject.makePivot(offsetX, offsetY, offsetZ);
}

// Rotates the camera around its axis by given radians. Note that axis must be
// one of goldenhorse.axes.X, goldenhorse.axes.Y or goldenhorse.axes.Z.
goldenhorse.prototype.rotateCamera = function(axis, radians){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.rotateCamera, preConditions.axis, axis);
  preConditions.checkIfDefined(goldenhorse.rotateCamera, preConditions.radians, radians);
  preConditions.checkIfNumber(goldenhorse.rotateCamera, preConditions.radians, radians);
  preConditions.checkIfAxisOnlyIfDefined(goldenhorse.rotateCamera, preConditions.axis, axis);
  if (axis == this.axes.X){
    cameraRotationBuffer.x += radians;
  }else if (axis == this.axes.Y){
    cameraRotationBuffer.y += radians;
  }else if (axis == this.axes.Z){
    cameraRotationBuffer.z += radians;
  }
}

// Translates the camera along given axis by given amount. Note that axis must be
// one of goldenhorse.axes.X, goldenhorse.axes.Y or goldenhorse.axes.Z.
goldenhorse.prototype.translateCamera = function(axis, amount){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.translateCamera, preConditions.axis, axis);
  preConditions.checkIfDefined(goldenhorse.translateCamera, preConditions.amount, amount);
  preConditions.checkIfNumber(goldenhorse.translateCamera, preConditions.amount, amount);
  preConditions.checkIfAxisOnlyIfDefined(goldenhorse.translateCamera, preConditions.axis, axis);
  if (axis == this.axes.X){
    camera.translateX(amount);
  }else if (axis == this.axes.Y){
    camera.translateY(amount);
  }else if (axis == this.axes.Z){
    camera.translateZ(amount);
  }
}

// Goes to full screen mode. on the next mouse click. Does nothing if the screen is
// already in full screen mode.
goldenhorse.prototype.requestFullScreen = function(){
  if (mode == 0){
    return;
  }
  if (onFullScreen){
    return;
  }
  fullScreenRequested = true;
}

// Returns true if the mouse is pressed, false otherwise.
goldenhorse.prototype.isMouseDown = function(){
  if (mode == 0){
    return;
  }
  return isMouseDown;
}

// Finds the first intersected object on a ray. The onComplete callback function
// is executed with x, y, z and objectName parameters. If there's no intersection,
// the objectName is set to null. If the web workers not supported, the onComplete
// is executed immediately.
goldenhorse.prototype.intersectionTest = function(fromVector, directionVector, onComplete){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.intersectionTest, preConditions.fromVector, fromVector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.intersectionTest, preConditions.fromVector, fromVector);
  preConditions.checkIfDefined(goldenhorse.intersectionTest, preConditions.directionVector, directionVector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.intersectionTest, preConditions.directionVector, directionVector);
  preConditions.checkIfDefined(goldenhorse.intersectionTest, preConditions.onComplete, onComplete);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.intersectionTest, preConditions.onComplete, onComplete);
  REUSABLE_VECTOR.set(fromVector.x, fromVector.y, fromVector.z);
  REUSABLE_VECTOR_2.set(directionVector.x, directionVector.y, directionVector.z).normalize();
  rayCaster.findIntersections(REUSABLE_VECTOR, REUSABLE_VECTOR_2, false, onComplete, null, null);
}

// Returns if the current client is a mobile client.
goldenhorse.prototype.isMobile = function(){
  if (mode == 0){
    return;
  }
  return isMobile || mobileSimulation.isActive;
}

// Linearly interpolate between vector1 and vector2. The result is vector1 if
// amount = 0 and vector2 if amount = 1.
goldenhorse.prototype.lerp = function(vector1, vector2, amount, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.lerp, preConditions.vector1, vector1);
  preConditions.checkIfDefined(goldenhorse.lerp, preConditions.vector2, vector2);
  preConditions.checkIfDefined(goldenhorse.lerp, preConditions.amount, amount);
  preConditions.checkIfDefined(goldenhorse.lerp, preConditions.targetVector, targetVector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.lerp, preConditions.vector1, vector1);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.lerp, preConditions.vector2, vector2);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.lerp, preConditions.targetVector, targetVector);
  preConditions.checkIfNumber(goldenhorse.lerp, preConditions.amount, amount);
  preConditions.checkIfInRange(goldenhorse.lerp, preConditions.amount, amount, 0, 1);
  REUSABLE_VECTOR.set(vector1.x, vector1.y, vector1.z);
  REUSABLE_VECTOR_2.set(vector2.x, vector2.y, vector2.z);
  REUSABLE_VECTOR.lerp(REUSABLE_VECTOR_2, amount);
  targetVector.x = REUSABLE_VECTOR.x;
  targetVector.y = REUSABLE_VECTOR.y;
  targetVector.z = REUSABLE_VECTOR.z;
  return targetVector;
}

// Pauses/unpauses rendering. Note that once the rendering is paused the scripts
// also pause so in order to unpause the rendering, use callback functions such
// as goldenhorse.setScreenClickListener or goldenhorse.setScreenPointerLockChangeListener.
goldenhorse.prototype.pause = function(paused){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.pause, preConditions.paused, paused);
  preConditions.checkIfBooleanOnlyIfExists(goldenhorse.pause, preConditions.paused, paused);
  var oldIsPaused = isPaused;
  isPaused = paused;
  if (!paused && oldIsPaused){
    render();
  }
}

// Executes the given function for each object and object group. The func paremter
// is executed with object and objectName parameters.
goldenhorse.prototype.executeForEachObject = function(func){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.executeForEachObject, preConditions.func, func);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.executeForEachObject, preConditions.func, func);
  for (var objName in sceneHandler.getAddedObjects()){
    func(addedObjects[objName], objName)
  }
  for (var objName in sceneHandler.getObjectGroups()){
    func(objectGroups[objName], objName)
  }
}

// Returns a random integer in range [minInclusive, maxInclusive]
goldenhorse.prototype.getRandomInteger = function(minInclusive, maxInclusive){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getRandomInteger, preConditions.minInclusive, minInclusive);
  preConditions.checkIfDefined(goldenhorse.getRandomInteger, preConditions.maxInclusive, maxInclusive);
  preConditions.checkIfNumber(goldenhorse.getRandomInteger, preConditions.minInclusive, minInclusive);
  preConditions.checkIfNumber(goldenhorse.getRandomInteger, preConditions.maxInclusive, maxInclusive);
  preConditions.checkIfTrue(goldenhorse.getRandomInteger, "minInclusive must be less than maxInclusive", (minInclusive > maxInclusive));
  return Math.floor(Math.random() * (maxInclusive - minInclusive + 1)) + minInclusive;
}

// For mobile devices, returns true if there is any finger touching to the screen.
goldenhorse.prototype.isAnyFingerTouching = function(){
  if (mode == 0){
    return;
  }
  return touchEventHandler.isThereFingerTouched;
}

// For mobile devices, returns the amount of fingers touching to the screen.
goldenhorse.prototype.getCurrentTouchCount = function(){
  if (mode == 0){
    return;
  }
  return touchEventHandler.currentTouchCount;
}

// For mobile devices returns if the orientation is landscape for mobile devices. Returns
// false for desktop devices.
goldenhorse.prototype.isOrientationLandscape = function(){
  if (mode == 0){
    return;
  }

  if (mobileSimulation.isActive){
    return mobileSimulation.orientation == "landscape";
  }

  if (!isMobile){
    return false;
  }
  return isOrientationLandscape;
}

// Runs a function after delayInMS milliseconds. If the repeat parameter is set to true runs
// the function in every delayInMS milliseconds. This function returns a delayedExecutionID.
// This ID may provided to stopDelayedExecution API in order to stop a function to get executed.
// Note that the IDs are recycled after a delayed execution is completed.
goldenhorse.prototype.executeDelayed = function(func, delayInMS, repeat){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.executeDelayed, preConditions.func, func);
  preConditions.checkIfDefined(goldenhorse.executeDelayed, preConditions.delayInMS, delayInMS);
  preConditions.checkIfDefined(goldenhorse.executeDelayed, preConditions.repeat, repeat);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.executeDelayed, preConditions.func, func);
  preConditions.checkIfNumberOnlyIfExists(goldenhorse.executeDelayed, preConditions.delayInMS, delayInMS);
  preConditions.checkIfLessThan(goldenhorse.executeDelayed, preConditions.delayInMS, delayInMS, 0);
  preConditions.checkIfBooleanOnlyIfExists(goldenhorse.executeDelayed, preConditions.repeat, repeat);
  return delayedExecutionHandler.requestDelayedExecution(delayInMS, func, repeat);
}

// Stops a function to get executed with executeDelayed API. The delayedExecutionID parameter
// should be the return value of executeDelayed API. This API returns true if a function is
// found associated with the provided delayedExecutionID parameter, returns false otherwise.
goldenhorse.prototype.stopDelayedExecution = function(delayedExecutionID){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.stopDelayedExecution, preConditions.delayedExecutionID, delayedExecutionID);
  return delayedExecutionHandler.stopDelayedExecution(delayedExecutionID);
}

// Sets a hash to window.location. This can be used to track changes when
// the user presses on back button.
goldenhorse.prototype.setLocationHash = function(hash){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.setLocationHash, preConditions.hash, hash);
  window.location.hash = hash;
}

// Changes the active scene. The readyCallback function is executed when
// the new scene is ready.
goldenhorse.prototype.changeScene = function(sceneName, readyCallback){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.changeScene, preConditions.sceneName, sceneName);
  preConditions.checkIfSceneExists(goldenhorse.changeScene, sceneName);
  preConditions.checkIfDefined(goldenhorse.changeScene, preConditions.readyCallback, readyCallback);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.changeScene, preConditions.readyCallback, readyCallback);
  preConditions.checkIfTrue(goldenhorse.changeScene, "Scene is already active.", sceneHandler.getActiveSceneName() == sceneName);
  sceneHandler.changeScene(sceneName, readyCallback);
}

// Converts degrees to radians.
goldenhorse.prototype.degreeToRadian = function(degree){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.degreeToRadian, preConditions.degree, degree);
  preConditions.checkIfNumber(goldenhorse.degreeToRadian, preConditions.degree, degree);
  return (degree * (Math.PI / 180));
}

// Stores data using localStorage API.
goldenhorse.prototype.storeData = function(key, value){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.storeData, preConditions.key, key);
  preConditions.checkIfDefined(goldenhorse.storeData, preConditions.value, value);
  localStorage.setItem(key, value);
}

// Gets stored data using localStorage API.
goldenhorse.prototype.getStoredData = function(key){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.getStoredData, preConditions.key, key);
  return localStorage.getItem(key);
}

// Removes stored data using localStorage API.
goldenhorse.prototype.removeStoredData = function(key){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.removeStoredData, preConditions.key, key);
  localStorage.removeItem(key);
}

// Checks if given element is defined.
goldenhorse.prototype.isDefined = function(element){
  if (mode == 0){
    return;
  }
  return !(typeof element == UNDEFINED) && !(element == null);
}

// Loads given textures inside provided dynamic texture folder. onLoadedCallback is executed
// with results parameter when the loading process is finished. This results parameter holds either
// a texture pack object as element if the texture could be loaded, or false if not. The order of
// elements of results parameter and textureNamesArray are the same. goldenhorse engine automatically takes care of
// caching, so a texture is not loaded twice from the same path. If png, jpg or jpeg file extensions are
// provided in the texture name, goldenhorse tries to load non compressed textures. If no extension is provided
// a compressed texture is loaded in case the dynamic texture folder is created with noCompress parameter set to false.
// The default format is png if no extension is provided.
goldenhorse.prototype.loadDynamicTextures = function(dynamicTextureFolderName, textureNamesArray, onLoadedCallback){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.loadDynamicTextures, preConditions.dynamicTextureFolderName, dynamicTextureFolderName);
  preConditions.checkIfDefined(goldenhorse.loadDynamicTextures, preConditions.textureNamesArray, textureNamesArray);
  preConditions.checkIfDefined(goldenhorse.loadDynamicTextures, preConditions.onLoadedCallback, onLoadedCallback);
  preConditions.checkIfDynamicTextureFolderExists(goldenhorse.loadDynamicTextures, dynamicTextureFolderName);
  preConditions.checkIfArrayOfStrings(goldenhorse.loadDynamicTextures, preConditions.textureNamesArray, textureNamesArray);
  preConditions.checkIfFunctionOnlyIfExists(goldenhorse.loadDynamicTextures, preConditions.onLoadedCallback, onLoadedCallback);
  new DynamicTextureLoader().loadDynamicTextures(dynamicTextureFolderName, textureNamesArray, onLoadedCallback);
}

// Applies velocity to FPS controls for given milliseconds. This can be useful for
// Valve Ricochet kind of games where the player is manually accelerated with jump
// pads.
goldenhorse.prototype.applyCustomVelocity = function(axis, velocity, milliseconds){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.applyCustomVelocity, preConditions.axis, axis);
  preConditions.checkIfDefined(goldenhorse.applyCustomVelocity, preConditions.velocity, velocity);
  preConditions.checkIfDefined(goldenhorse.applyCustomVelocity, preConditions.milliseconds, milliseconds);
  preConditions.checkIfNumber(goldenhorse.applyCustomVelocity, preConditions.velocity, velocity);
  preConditions.checkIfNumber(goldenhorse.applyCustomVelocity, preConditions.milliseconds, milliseconds);
  preConditions.checkIfAxisOnlyIfDefined(goldenhorse.applyCustomVelocity, preConditions.axis, axis);
  preConditions.checkIfActiveControlFPS(goldenhorse.applyCustomVelocity);
  activeControl.applyCustomVelocity(axis, velocity, milliseconds);
}

// Converts a 3D vector within source area into another vector in target area
// maintanining the ratio.
goldenhorse.prototype.mapAreaPositionToArea = function(sourceAreaName, targetAreaName, vector, targetVector){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.mapAreaPositionToArea, preConditions.sourceAreaName, sourceAreaName);
  preConditions.checkIfDefined(goldenhorse.mapAreaPositionToArea, preConditions.targetAreaName, targetAreaName);
  preConditions.checkIfDefined(goldenhorse.mapAreaPositionToArea, preConditions.vector, vector);
  preConditions.checkIfDefined(goldenhorse.mapAreaPositionToArea, preConditions.targetVector, targetVector);
  preConditions.checkIfAreaExists(goldenhorse.mapAreaPositionToArea, sourceAreaName);
  preConditions.checkIfAreaExists(goldenhorse.mapAreaPositionToArea, targetAreaName);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.mapAreaPositionToArea, preConditions.vector, vector);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.mapAreaPositionToArea, preConditions.targetVector, targetVector);

  var bbSource = areas[sourceAreaName].boundingBox;
  var bbTarget = areas[targetAreaName].boundingBox;

  targetVector.x = affineTransformation(vector.x, bbSource.max.x, bbSource.min.x, bbTarget.max.x, bbTarget.min.x);
  targetVector.y = affineTransformation(vector.y, bbSource.max.y, bbSource.min.y, bbTarget.max.y, bbTarget.min.y);
  targetVector.z = affineTransformation(vector.z, bbSource.max.z, bbSource.min.z, bbTarget.max.z, bbTarget.min.z);

  return targetVector;
}

// Returns a vector pool to store reusable vectors. Use getFromVectorPool
// API to get the vector object.
goldenhorse.prototype.createVectorPool = function(length){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.createVectorPool, preConditions.length, length);
  preConditions.checkIfNumber(goldenhorse.createVectorPool, preConditions.length, length);
  preConditions.checkIfLessThan(goldenhorse.createVectorPool, preConditions.length, length, 0);

  return new VectorPool(this.vector, length);
}

// Returns a vector from a vector pool create with createVectorPool API.
goldenhorse.prototype.getFromVectorPool = function(vectorPool){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.getFromVectorPool, preConditions.vectorPool, vectorPool);
  preConditions.checkIfTrue(goldenhorse.getFromVectorPool, "Object is not a vector pool", !vectorPool.isVectorPool);

  return vectorPool.get();
}

// Returns an object of client details. Included fields are:
// isMobile: Whether the device is mobile or not
// isIOS: Whether the device is an IOS device or not
// isWebGLFriendly: Whether the device is WebGL friendly or not. goldenhorse decides if a device is WebGL friendly
// by comparing MAX_VERTEX_UNIFORM_VECTORS to 1024.
// astcSupported: Whether the ASTC format is supported or not.
// s3tcSupported: Whether the S3TC format is supported or not.
// pvrtcSupported: Whether the PVRTC format is supported or not.
// highPrecisionSupported: Whether HIGHP is supported in shaders or not.
// browser: The browser name. Can be one of: Opera, Chrome, Safari, Firefox, IE or Unknown. Good luck if it's IE.
goldenhorse.prototype.getClientDetails = function(){
  if (mode == 0){
    return;
  }
  if (!CLIENT_DETAILS){
    CLIENT_DETAILS = {
      isMobile: isMobile || mobileSimulation.isActive,
      isIOS: isIOS || (mobileSimulation.isActive && mobileSimulation.isIOS),
      isWebGLFriendly: isWebGLFriendly,
      astcSupported: ASTC_SUPPORTED,
      s3tcSupported: S3TC_SUPPORTED,
      pvrtcSupported: PVRTC_SUPPORTED,
      highPrecisionSupported: HIGH_PRECISION_SUPPORTED,
      browser: BROWSER_NAME
    };
  }else{
    CLIENT_DETAILS.isMobile = isMobile || mobileSimulation.isActive;
    CLIENT_DETAILS.isIOS = isIOS || (mobileSimulation.isActive && mobileSimulation.isIOS);
  }
  return CLIENT_DETAILS;
}

// Performs an intersection test with the bounding boxes of given objects or
// object groups and returns true if they intersect with each other, false otherwise.
goldenhorse.prototype.boundingBoxIntersectionTest = function(object1, object2){
  if (mode == 0){
    return;
  }
  preConditions.checkIfDefined(goldenhorse.boundingBoxIntersectionTest, preConditions.object1, object1);
  preConditions.checkIfDefined(goldenhorse.boundingBoxIntersectionTest, preConditions.object2, object2);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.boundingBoxIntersectionTest, preConditions.object1, object1);
  preConditions.checkIfAddedObjectOrObjectGroup(goldenhorse.boundingBoxIntersectionTest, preConditions.object2, object2);
  preConditions.checkIfIntersectable(goldenhorse.boundingBoxIntersectionTest, preConditions.object1, object1);
  preConditions.checkIfIntersectable(goldenhorse.boundingBoxIntersectionTest, preConditions.object2, object2);

  return object1.intersectsObject(object2);
}

// Cancels existing pointer lock requests.
goldenhorse.prototype.cancelPointerLockRequests = function(){
  if (mode == 0){
    return;
  }
  pointerLockRequested = false;
}

// Calculates and returns the length of given vector.
goldenhorse.prototype.vectorLength = function(vec){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.vectorLength, preConditions.vec, vec);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.vectorLength, preConditions.vec, vec);

  REUSABLE_VECTOR.set(vec.x, vec.y, vec.z);
  return REUSABLE_VECTOR.length();
}

// Calcualtes and returns the square of the length of given vector.
goldenhorse.prototype.vectorLengthSquare = function(vec){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.vectorLengthSquare, preConditions.vec, vec);
  preConditions.checkIfVectorOnlyIfDefined(goldenhorse.vectorLengthSquare, preConditions.vec, vec);

  REUSABLE_VECTOR.set(vec.x, vec.y, vec.z);
  return REUSABLE_VECTOR.lengthSq();
}

// Returns the max texture size the client device supports.
goldenhorse.prototype.getMaxTextureSize = function(){
  if (mode == 0){
    return;
  }

  return WEBGL_MAX_TEXTURE_SIZE;
}

// Sets the pixel ratio of the WebGL renderer. More the pixelRatio
// better the rendering quality however worse the performance. Use this with
// caution, especially for fullscreen apps.
goldenhorse.prototype.setPixelRatio = function(pixelRatio){
  if (mode == 0){
    return;
  }

  preConditions.checkIfDefined(goldenhorse.setPixelRatio, preConditions.pixelRatio, pixelRatio);
  preConditions.checkIfNumber(goldenhorse.setPixelRatio, preConditions.pixelRatio, pixelRatio);

  previewModeScreenResolution = pixelRatio;
  renderer.setPixelRatio(previewModeScreenResolution);
  smartRenderingHandler.invalidate();
}

// Creates and returns a new EventEmitter containing following methods:
// on(eventKey, callbackFunction): Listens for an event and executes the
// callback function with the emitted data when the event is emitted. This
// method returns an id which is used in off method.
// off(id): Stops listening for an event. Id is obtained when on is called
// emit(event, data): Emits an event with given data
goldenhorse.prototype.createEventEmitter = function(){
  return new EventEmitter();
}
